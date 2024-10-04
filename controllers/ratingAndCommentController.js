const User = require("../models/userModel.js");
const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
const Product = require("../models/productModel.js");
const RatingAndComment=require("../models/ratingAndcommentModel.js")

const addRatingAndComment=asyncHandler(async (req,res)=>{
try {
    const{rating,comment}=req.body
    const productId=req.params.id
   
    const userId=req.user.id
    const user=await User.findOne({_id:userId})
    const findProduct=await Product.findOne({_id:productId})
    if(!findProduct){
        throw ApiError(404,"Product is not Found")
    }
    
    console.log(findProduct);
    
    const Rating=new RatingAndComment({
        productId,
        rating,
        comment,
        postedBy:user.firstname
    })
    await Rating.save()
    res.status(201).json(Rating)
} catch (error) {
    throw ApiError(error.statusCode,error.message)
}
})

const getProductRating=asyncHandler(async (req,res)=>{
try {
    const productId=req.params.id
    const praductRating=await RatingAndComment.find({productId})
    if(!praductRating){
        throw ApiError(404,"Product Not have any Rating and comment")
    }
    res.status(200).json(praductRating)
} catch (error) {
    throw ApiError(error.statusCode,error.message)
}
})

module.exports={
addRatingAndComment,
getProductRating
}