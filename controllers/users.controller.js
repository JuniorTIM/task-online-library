const User = require("../models/user.model");
const Book = require("../models/book.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      name: req.body.name,
      isBlocked: req.body.isBlocked,
      booksId: req.body.booksId,
    })
      .then(() => {
        res.json("Пользователь добавлен");
      })
      .catch((err) => {
        res.json(err);
      });
  },

  backBook: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { booksId: req.body.booksId },
        },
        await Book.findByIdAndUpdate(req.body.booksId, {
          userId: null,
        })
      );
      res.json("Возврат книги успешен");
    } catch (err) {
      res.json(err);
    }
  },

  takeBook: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.body.rentBooks);

      if (user.isBlocked === true) {
        if (user.booksId.length < 3) {
          if (book.userId === null) {
            await User.findByIdAndUpdate(req.params.id, {
              $push: { booksId: req.body.booksId },
            });
            await Book.findByIdAndUpdate(req.body.booksId, {
              userId: req.params.id,
            });
            res.json("успешно арендовал книгу");
          } else {
            res.json("книга уже арендована другим");
          }
        } else {
          res.json("нельзя арендовать больше 3 книг одновременно");
        }
      } else {
        res.json("пользователь в блоке");
      }
    } catch (error) {
      res.json(error);
    }
  },

  blockUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { booksId: req.body.booksId },
        isBlocked: true,
      });
      await Book.findByIdAndUpdate(req.body.booksId, {
        userId: [],
      });
      res.json("Юзер блокнут");
    } catch (err) {
      res.json(err);
    }
  },
};
