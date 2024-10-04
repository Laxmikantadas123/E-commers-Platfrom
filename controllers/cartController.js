const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
const Product = require("../models/productModel.js");
const Cart = require("../models/cartModel.js");

const addCart = asyncHandler(async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;
    
        const product = await Product.findById(productId);
        if (!product){
            throw ApiError(404, 'Product not found')
        }
    
        let cart = await Cart.findOne({ userId }) || new Cart({ userId, products: [] });
    
        const productInCart = cart.products.find(p => p.productId.toString() === productId);
    
        if (productInCart) {
            productInCart.quantity += quantity;
        } else {
            cart.products.push({ productId, quantity, price: product.price });
        }
    
        cart.totalAmount = cart.products.reduce((total, item) => total + (item.price * item.quantity), 0);
    
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        throw ApiError(error.statusCode,error.message)
    }
});

const removeProdutCart = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id; 
  let cart = await Cart.findOne({ userId });
  if (!cart) throw ApiError(404, "Cart not found");
  const productIndex = cart.products.findIndex(
    (p) => p.productId.toString() === productId
  );
  if (productIndex === -1) throw ApiError(404, "Product not found in cart");
  const { price, quantity } = cart.products[productIndex];
  cart.products.splice(productIndex, 1);
  cart.totalAmount -= price * quantity;
  await cart.save();
  res.status(200).json({
    message: "Product removed from cart successfully",
    cart,
    totalAmount: cart.totalAmount,
  });
});
const getCart=asyncHandler(async (req,res)=>{
    try {
        const userId=req.user.id
        const userInCart=await Cart.find({userId})
        if(!userInCart){
            throw ApiError(404,"Product Not Found")
        }
        res.status(200).json(userInCart)
    } catch (error) {
        
    }
})
module.exports = {
  addCart,
  removeProdutCart,
  getCart
};
