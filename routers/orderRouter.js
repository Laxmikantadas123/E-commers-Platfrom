const express=require("express")
const router=express.Router()
const auth=require("../middlewares/auth.js")
const{postOrder,getAllOrder,cancelOrder}=require("../controllers/orderController.js")
router.post("/postorder",auth,postOrder)
router.get("/getorder",auth,getAllOrder)
router.delete("/cancelorder/:id",auth,cancelOrder)
module.exports=router