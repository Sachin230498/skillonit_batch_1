import express from "express"
import Product from "../models/ProductModel.js";
import { getProduct,createProduct,UpdateProduct,DeleteProduct,SingleProduct } from "../controller/productController.js";
import RoleCheck from "../middleware/RoleCheck.js";
import middle from "../middleware/middle.js"

const router = express.Router()
// create product
router.post("/post", RoleCheck,middle ,createProduct );

// read all product
router.get("/getdata",getProduct);

// read one
router.get("/getone/:id",SingleProduct);

// update product
router.put("/update/:id",UpdateProduct );

// delete product
router.delete("/delete/:id",DeleteProduct );


export default router;