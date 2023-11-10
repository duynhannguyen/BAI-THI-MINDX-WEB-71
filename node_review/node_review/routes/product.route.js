import express from "express";
import productController from "../controller/productController.js";
import authMiddleware from "../middlewares/auth.mdw.js";
const router = express.Router();

router.get("/", authMiddleware, productController.getProduct);
router.get("/order/:id", authMiddleware, productController.getOrder);

export default router;
