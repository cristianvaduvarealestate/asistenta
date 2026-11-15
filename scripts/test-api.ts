import assert from "node:assert/strict";
import { isValidEmail, isValidPhone, normalizePhone, sanitizeText } from "../src/lib/validation";

assert.equal(isValidPhone("0767 110 439"), true);
assert.equal(isValidPhone("123"), false);
assert.equal(normalizePhone("+40 (767) 110-439"), "+40767110439");
assert.equal(isValidEmail("cristian@example.ro"), true);
assert.equal(isValidEmail("invalid@"), false);
assert.equal(sanitizeText(" ok\u0000 "), "ok");
console.log("Validation checks passed");
