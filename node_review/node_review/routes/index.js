import express from "express";
import productRouter from "./product.route.js";
import authRouter from "./auth.route.js";
const router = express.Router();
router.use("/product", productRouter);
router.use("/auth", authRouter);
export default router;
