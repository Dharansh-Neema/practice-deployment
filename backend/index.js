import express from "express";
const app = express();
import connectDB from "./config/db.js";

import productRouter from "./router/productRouter.js";
//.env
import 'dotenv/config'
import cors from "cors";
app.use(cors());
// Regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs
app.set("view engine", "ejs");

// API routes
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.json("Welcome to product world")
});


const PORT = process.env.PORT || 3000;
console.log(process.env.PORT)
connectDB();
app.listen(PORT, () => {
  
  console.log(`Server is running on port ${PORT}`);
});
