// The Node.js crypto module provides cryptographic functionality: hashing, encryption/decryption, generating random values, digital signatures, and more.

import crypto from "crypto";

// const hash = crypto.createHash("sha256");
// hash.update("password1222");
// console.log(hash.digest("hex"));

// const hash2 = crypto.createHash("sha256").update("password1222").digest("hex");

// console.log(hash2);

// randomBytes
// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString("hex"));
// });

// const token = crypto.randomBytes(32).toString("hex");

// console.log(token);

// const id = crypto.randomUUID();

// console.log(id);

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("With God I go make am oo", "utf8", "hex");

encrypted += cipher.final("hex");

console.log("Encrypted:", encrypted);

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted, "hex", "utf8");

decrypted += decipher.final("utf8");

console.log("Decrypted:", decrypted);
