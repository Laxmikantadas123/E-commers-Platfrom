const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
const Product = require("../models/productModel.js");
const Order=require("../models/orderModel.js")
const User=require("../models/userModel.js")

const postOrder=asyncHandler(async (req,res)=>{
    try {
        const{productId,quantity,address}=req.body

        
        const userId=req.user.id
        const product = await Product.findById(productId);
        if (!product){
            throw ApiError(404, 'Product not found')
        }
        const user=await User.findById(userId)
        if(address===undefined && user.address===undefined){
        throw ApiError(400,"Address is require")
        }
        
     const totalamount=product.price*quantity
        const order=new Order({
            userId,
            productId,
            productName:product.title,
            quantity:quantity,
            address:address||user.address,
            price:product.price,
            totalprice:totalamount


        })
        
        await order.save()
       
        
        res.status(200).json(order)
    } catch (error) {
        throw ApiError(error.statusCode,error.message)
    }
})

const getAllOrder=asyncHandler(async (req,res)=>{
    try {
        const userId=req.user.id
        const allOrdre=await Order.find({ userId: userId })
        if(!allOrdre){
            throw ApiError(404,"Ordre is not found")
        }
        res.status(200).json(allOrdre)
    } catch (error) {
        throw ApiError(error.statusCode,error.message)
    }
})


const cancelOrder=asyncHandler(async (req,res)=>{
try {
    const orderId=req.params.id
    const isOrderFound=await Order.findOneAndDelete({_id:orderId})
    if(!isOrderFound){
        throw ApiError(404,"Order not have present")
    }
    res.status(200).json(isOrderFound)
} catch (error) {
    throw ApiError(error.statusCode,error.message)
}
})
module.exports={
    postOrder,
    getAllOrder,
    cancelOrder
}