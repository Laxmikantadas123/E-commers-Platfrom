const mongoose = require("mongoose");
const ratingAndCommentSchema =mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    rating: {
      type: Number,
      required: true,
      min:1,
      max:5
    },
    comment: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps:true }
);

const ratingAndCommentModel = mongoose.model("rating", ratingAndCommentSchema);
module.exports = ratingAndCommentModel;
