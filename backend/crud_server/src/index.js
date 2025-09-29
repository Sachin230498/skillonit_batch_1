import express from "express"
import connectDB from "./config/db.js";
import normalRoute from "./routes/normalRoute.js"
import userRouter from "./routes/userRoutes.js"

const app = express()
app.use(express.json())
const PORT = 8085;

connectDB()

app.use("/user", normalRoute)

app.use("/user",userRouter)

app.get("/",(req,res)=>{
  res.send("Hello")
})




// http://localhost:8085/user/normal


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})