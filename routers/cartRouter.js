const express=require("express")
const router=express.Router()
const auth=require("../middlewares/auth.js")
const {addCart,removeProdutCart,getCrat}=require("../controllers/cartController.js")
router.post("/addcart",auth,addCart)
router.post("/removecart",auth,removeProdutCart)
router.get("/getcart",auth,getCrat)

module.exports=router