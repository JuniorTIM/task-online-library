const Review = require("../models/review.model");

module.exports.reviewController = {
  postReview: (req, res) => {
    Review.create({
      author: req.body.author,
      text: req.body.text,
      bookId: req.body.bookId,
    })
      .then(() => {
        res.json("Отзыв написан");
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
