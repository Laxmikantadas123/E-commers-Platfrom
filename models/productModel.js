const mongoose = require("mongoose");
const producSchema =mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "electronics",
        "fashion",
        "home and kitchen",
        "beauty and personal care",
        "baby and kids"
      ],
      default: "dress",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

const modelSchema = mongoose.model("product", producSchema);
module.exports = modelSchema;
