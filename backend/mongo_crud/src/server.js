import express from "express"
import dotenv from "dotenv"
import Product from "./models/ProductModel.js"
import connectDb from "./config/Dbconnect.js"
import productrouter from "./routes/productRoutes.js"
dotenv.config()

// make app
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8058
const Mongourl = process.env.Mongo

// connect Database
connectDb(Mongourl)

// console.log(Product.find())

// Create Routes
app.get("/",(req,res)=>{
res.send("Welcome")
})


app.use("/product",productrouter)


// start the server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});