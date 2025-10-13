import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/users", protect, authorize("admin"), getAllUsers);

export default router;
