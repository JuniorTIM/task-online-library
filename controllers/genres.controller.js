const Genre = require("../models/genre.model");

module.exports.genreController = {
  postGenre: (req, res) => {
    Genre.create({
      name: req.body.name,
    })
      .then(() => {
        res.json("Жанр создан");
      })
      .catch((err) => {
        res.json(err);
      });
  },

  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Удален жанр");
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getAll: (req, res) => {
    Genre.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  updateGenre: (req, res) => {
    Genre.findByIdAndUpdate(req.params.id, { name: req.body.name })
      .then(() => {
        res.json("Обновлено");
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
