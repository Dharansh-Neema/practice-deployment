import Product from "../model/product.js";

export const products = async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("../backend/views/homepage", { products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProductForm = (req, res) => {
  res.render("../backend/views/createproduct");
};

export const saveProduct = async (req, res) => {
  try {
    const { name, price, description, rating } = req.body;
    if (!name || !price) {
      return res.render("../backend/views/createproduct", { 
        error: "Name and price are required",
        product: req.body 
      });
    }
    await Product.create({ name, price, description, rating });
    res.redirect("/");
  } catch (error) {
    res.render("../backend/views/createproduct", { 
      error: error.message,
      product: req.body 
    });
  }
};
