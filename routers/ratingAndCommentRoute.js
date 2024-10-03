const express=require("express")
const router=express.Router()
const auth=require("../middlewares/auth.js")
const {addRatingAndComment,getProductRating}=require("../controllers/ratingAndCommentController.js")

router.post("/addRatingAndComment/:id",auth,addRatingAndComment)
router.get("/getProductRating/:id",auth,getProductRating)





module.exports=router