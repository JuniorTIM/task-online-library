const mongoose = require("mongoose");

const reviewSchema = {
  author: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  bookId: {
    ref: "Book",
    type: mongoose.SchemaTypes.ObjectId,
  },
};

const Review = mongoose.model("Book", reviewSchema);

module.exports = Review;
