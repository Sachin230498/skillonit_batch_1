import express from "express"
import getData from "../controller/getData.js"


const router = express.Router()


router.get("",(req,res)=>{
    res.send("Hello Server")
})


router.get("/data", getData)


export default router;