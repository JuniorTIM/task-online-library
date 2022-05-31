const Book = require("../models/book.model");

module.exports.bookController = {
  postBook: (req, res) => {
    Book.create({
      name: req.body.name,
      isAvailable: req.body.isAvailable,
      genreId: req.body.genreId,
      userId: req.body.userId,
    })
      .then(() => {
        res.json("Книжка создана");
      })
      .catch((err) => {
        res.json(err);
      });
  },

  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getAll: (req, res) => {
    Book.find()
      .populate("isAvailable")
      .populate("genreId")
      .populate("userId")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  updateBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      isAvailable: req.body.isAvailable,
      genreId: req.body.genreId,
      userId: req.body.userId,
    })
      .then(() => {
        res.json("Изменено");
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getById: (req, res) => {
    Book.findById(req.params.id)
      .populate("isAvailable")
      .populate("userId")
      .populate("genreId")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getBookByGenre: (req, res) => {
    Book.findById({ genreId: req.params.id })
      .populate("isAvailable")
      .populate("userId")
      .populate("genreId")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
