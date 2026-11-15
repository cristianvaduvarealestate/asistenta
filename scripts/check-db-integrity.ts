import Database from "better-sqlite3";
import { getDbPath } from "../src/lib/db";

function checkIntegrity() {
  const targetPath = process.argv[2] || getDbPath();
  console.log(`[Integrity Check] Verificare fișier bază de date: ${targetPath}`);

  try {
    const db = new Database(targetPath, { readonly: true, fileMustExist: true });

    // 1. Full integrity check
    const integrity = db.pragma("integrity_check") as { integrity_check: string }[];
    const isIntegrityOk = integrity.length === 1 && integrity[0].integrity_check === "ok";
    console.log(`- PRAGMA integrity_check: ${integrity[0]?.integrity_check || "failed"}`);

    // 2. Foreign keys check
    const foreignKeys = db.pragma("foreign_key_check") as unknown[];
    console.log(`- PRAGMA foreign_key_check: ${foreignKeys.length === 0 ? "ok (0 violări)" : `${foreignKeys.length} erori`}`);

    // 3. Schema tables summary
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all() as { name: string }[];
    console.log(`- Tabele detectate (${tables.length}): ${tables.map((t) => t.name).join(", ")}`);

    // 4. Request count
    const count = db.prepare("SELECT COUNT(*) as c FROM requests").get() as { c: number };
    console.log(`- Total solicitări salvate: ${count.c}`);

    db.close();

    if (isIntegrityOk && foreignKeys.length === 0) {
      console.log("✓ Baza de date este integră și validă.");
      process.exit(0);
    } else {
      console.error("✗ Baza de date conține erori de integritate!");
      process.exit(1);
    }
  } catch (err) {
    console.error("✗ Eroare la deschiderea bazei de date:", err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

checkIntegrity();
