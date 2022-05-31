const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");
const router = Router();

router.post("/reviews", reviewController.postReview);

module.exports = router;