// const User = require("../models/userModel.js");
const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
const Product = require("../models/productModel.js");

// -----------------------addProduct----------------------
const addProduct = asyncHandler(async (req, res) => {
  try {
    const { title, description, price, category, quantity } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    if(!req.file){
      throw ApiError(400,"Image is is require")
    }
    const newProduct = new Product({
      title,
      description,
      price,
      category,
      quantity,
      images: req.file
    });
    
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    throw ApiError(error.statusCode, error.message);
  }
});
const updateUpdate = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw ApiError(404, "User is not Not found");
    }
    
    const updateData = {
      ...req.body,
    };
    if (req.file) {
      updateData.image = req.file;
    }
    const updateProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    console.log(updateProduct);

    res.status(200).json(updateProduct);
  } catch (error) {
    throw ApiError(error.statusCode, error.message);
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw ApiError(404, "User is not Not found");
    }
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    throw ApiError(error.statusCode, error.message);
  }
});



module.exports = {
  addProduct,
  updateUpdate,
  deleteProduct,
};
