const crypto = require("crypto")

const algo = "sha256";
const key  = crypto.randomBytes(32); // secret key
const vector = crypto.randomBytes(16);


 let message =  "Hello User, this is secret !"

// encrypt
 const x = crypto.createCipheriv(algo,key,vector)
// console.log(x)

const encrypted = x.update(message, "utf-8")

// console.log(encrypted)

// encrypted = encrypted + 

