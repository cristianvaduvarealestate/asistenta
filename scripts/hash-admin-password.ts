import { randomBytes, scryptSync } from "crypto";

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error("Usage: npm run admin:hash -- <parola de minimum 12 caractere>");
  process.exit(1);
}
const salt = randomBytes(16).toString("hex");
const hash = scryptSync(password, salt, 64).toString("hex");
console.log(`${salt}:${hash}`);
