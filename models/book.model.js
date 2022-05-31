const mongoose = require("mongoose");

const bookSchema = {
  name: String,
  genreId: {
      ref: "Genre",
      type: mongoose.SchemaTypes.ObjectId
  },
  userId: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    default: null
  },
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
