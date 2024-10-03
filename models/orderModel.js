const mongoose = require("mongoose");
const orderSchema =mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    oredrdate: {
      type: Date,
      default: Date.now,
    },
    productName: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
    },
    totalprice: {
      type: Number,
    },
    address:{
      type:String,
    },
    status: {
      type: String,
      enum: ["order process", "conform order", "order recieve"],
      default: "conform order",
    },
  },
  { timestamps: true }
);
const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
