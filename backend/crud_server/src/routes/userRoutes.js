import express from "express";
import User from "../models/userModel.js";
import { createUser,getUser } from "../controller/userController.js";


const router  =express.Router()


router.post("/createuser",createUser)


router.get("/getUser",getUser )


export default router