// its a core module in nodejs used to create server and handle request & response

const http = require("http")
const fs = require("fs")


const data = fs.readFileSync("db.json", "utf-8")
// console.log(data)
const db = JSON.parse(data)
console.log(db)

// create server
const server = http.createServer((req,res)=>{
  res.writeHead(200, { "Content-Type": "application/json" });

  // routes
 if(req.url =="/users"){
    res.end(JSON.stringify(db.user))
 }``

//   if(req.url == "/"){
//       res.send("<h1> Welcome to Home page </h1>");
//       res.end()
//   }else if(req.url == "/about"){
//     res.end("Welcome to about page")
//   }
})



// Start the server on port 2304
server.listen(3000, ()=>{
    console.log("server is running")
})