// Crypto module provides a way to perform cryptographic operation

// Hasing
// Encryption & Decryption
// gnereating rendom values(token, password, otp)

const crypto = require("crypto")

const password = "Mypassword@12";

const hashpass = crypto.createHash("sha256").update(password).digest("hex")

// console.log("orignal pass - ", password)
// console.log("hash pass - ", hashpass)


const token = crypto.randomBytes(8).toString("hex")

console.log(token)