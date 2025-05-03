import Product from "../model/product.js";
export const createProduct = async (req, res) => {
   try {
    const {name,price,description,rating} = req.body;
    if(!name || !price){
        return res.status(400).json({ message: "Name and price are required" });
    }
    const product = await Product.create({name,price,description,rating});
    if(!product){
        return res.status(400).json({ message: "Product not created" });
    }
    res.status(201).json({
        success:true,
        message:"Product created successfully",
        product
    });
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if(!products){
            return res.status(400).json({ message: "No products found" });
        }
        res.status(200).json({
            success:true,
            message:"Products fetched successfully",
            products
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.body;
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
        if(!product){
            return res.status(400).json({ message: "Product not found" });
        }
        res.status(200).json({
            success:true,
            message:"Product updated successfully",
            product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.body;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(400).json({ message: "Product not found" });
        }
        res.status(200).json({
            success:true,
            message:"Product deleted successfully",
            product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}