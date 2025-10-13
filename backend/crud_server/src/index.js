import express from "express"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js"
import dotenv from "dotenv";

dotenv.config();

let mongo_url = process.env.Mongo_Url;
let PORT = process.env.PORT || 8000

const app = express()
app.use(express.json())


connectDB(mongo_url)



app.use("/user",userRouter)

app.get("/",(req,res)=>{
  res.send("Hello")
})




// http://localhost:8085/user/normal


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})