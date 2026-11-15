import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { getDbPath } from "../src/lib/db";

async function restoreDatabase() {
  const backupFile = process.argv[2];
  if (!backupFile) {
    console.error("Utilizare: npm run restore:db -- <cale_catre_fisier_backup.sqlite>");
    process.exit(1);
  }

  const resolvedBackup = path.resolve(backupFile);
  if (!fs.existsSync(resolvedBackup)) {
    console.error(`Fișierul de backup nu există: ${resolvedBackup}`);
    process.exit(1);
  }

  console.log(`[Restaurare] Pasul 1: Validare integritate fișier backup: ${resolvedBackup}`);
  try {
    const backupDb = new Database(resolvedBackup, { readonly: true, fileMustExist: true });
    const check = backupDb.pragma("integrity_check") as { integrity_check: string }[];
    backupDb.close();
    if (check.length === 0 || check[0].integrity_check !== "ok") {
      console.error("Fișierul de backup este corupt! Restaurarea a fost anulată.");
      process.exit(1);
    }
    console.log("✓ Backup-ul este valid și integru.");
  } catch (err) {
    console.error("Eroare la citirea fișierului de backup:", err);
    process.exit(1);
  }

  const targetPath = getDbPath();
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Creare copie de siguranță a stării curente înainte de suprascriere
  if (fs.existsSync(targetPath)) {
    const preRestorePath = `${targetPath}.pre-restore-${Date.now()}`;
    console.log(`[Restaurare] Pasul 2: Creare copie de siguranță a bazei curente la: ${preRestorePath}`);
    fs.copyFileSync(targetPath, preRestorePath);
  }

  // Copiere fișier backup peste destinație
  console.log(`[Restaurare] Pasul 3: Suprascriere fișier destinație: ${targetPath}`);
  fs.copyFileSync(resolvedBackup, targetPath);

  // Curățare fișiere WAL și SHM reziduale
  const walPath = `${targetPath}-wal`;
  const shmPath = `${targetPath}-shm`;
  if (fs.existsSync(walPath)) fs.unlinkSync(walPath);
  if (fs.existsSync(shmPath)) fs.unlinkSync(shmPath);
  console.log("✓ Fișierele WAL și SHM vechi au fost eliminate pentru a preveni desincronizarea.");

  // Validare finală a bazei restaurate
  try {
    const restoredDb = new Database(targetPath, { readonly: true });
    const finalCheck = restoredDb.pragma("integrity_check") as { integrity_check: string }[];
    const count = restoredDb.prepare("SELECT COUNT(*) as c FROM requests").get() as { c: number };
    restoredDb.close();

    if (finalCheck.length > 0 && finalCheck[0].integrity_check === "ok") {
      console.log(`✓ Restaurare finalizată cu succes! Baza conține ${count.c} solicitări.`);
    } else {
      console.error("Eroare de integritate după restaurare:", finalCheck);
      process.exit(1);
    }
  } catch (err) {
    console.error("Eroare la verificarea bazei restaurate:", err);
    process.exit(1);
  }
}

restoreDatabase();
