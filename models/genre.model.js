const mongoose = require("mongoose");

const genreSchema = {
  name: String,
};

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
