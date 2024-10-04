const express=require("express")
const router=express.Router()
const auth=require("../middlewares/auth.js")
const {addCart,removeProdutCart,getCart}=require("../controllers/cartController.js")
router.post("/addcart",auth,addCart)
router.post("/removecart",auth,removeProdutCart)
router.get("/getcart",auth,getCart)

module.exports=router