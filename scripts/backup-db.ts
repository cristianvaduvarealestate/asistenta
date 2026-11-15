import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { getDbPath } from "../src/lib/db";

async function runBackup() {
  const dbPath = getDbPath();
  const backupDir = path.join(process.cwd(), "backups");

  if (!fs.existsSync(dbPath)) {
    console.error("Database file not found at:", dbPath);
    process.exit(1);
  }

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(backupDir, `helpdesk-${timestamp}.sqlite`);

  const db = new Database(dbPath);
  try {
    // Atomic online backup (safe with active writers and WAL mode)
    await db.backup(backupPath);

    // Verify backup integrity
    const backupDb = new Database(backupPath, { readonly: true });
    const check = backupDb.pragma("integrity_check") as { integrity_check: string }[];
    backupDb.close();

    if (check.length > 0 && check[0].integrity_check === "ok") {
      console.log(`Backup completed and verified successfully: ${backupPath}`);
    } else {
      console.error("Backup failed integrity verification:", check);
      process.exit(1);
    }
  } catch (err) {
    console.error("Backup failed:", err);
    process.exit(1);
  } finally {
    db.close();
  }
}

runBackup();
