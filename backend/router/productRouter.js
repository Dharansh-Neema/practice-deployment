import express from "express";
const router = express.Router();
import { createProduct, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
router.post("/create", createProduct);
router.get("/", getAllProducts);
router.put("/update", updateProduct);
router.delete("/delete", deleteProduct);

export default router;