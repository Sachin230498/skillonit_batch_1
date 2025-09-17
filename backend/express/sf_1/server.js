// import express

import express from "express"
import dotenv from "dotenv"

// load enviroment varibles
dotenv.config();

// create app
const app  = express()

// middleware to parse JSON body
app.use(express.json())

// define routes
app.get("/",(req,res)=>{
   res.send("Hello , Welcome to our express server")
})

app.get("/home",(req,res)=>{
   res.send("<h1>Hello</h1>")
})

app.post("/user",(req,res)=>{
    const  {name,email} = req.body
    
    res.send({a:name,b:email})
   
})


// console.log(process.env.APP_NAME);

// start server
let port = process.env.PORT;
// console.log(port)

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})

