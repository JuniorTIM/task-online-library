const mongoose = require("mongoose");

const userSchema = {
  name: String,
  isBlocked: {
    type: Boolean,
    default: false,
  },
  booksId: [
    {
      ref: "Book",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
};

const User = mongoose.model("User", userSchema);

module.exports = User;
