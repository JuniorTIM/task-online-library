const { Router } = require("express");
const { bookController } = require("../controllers/books.controller");
const router = Router();

router.post("/admin/books", bookController.postBook)
router.delete("/admin/books/:id", bookController.deleteBook)
router.get("/books", bookController.getAll)
router.get("/books/:id", bookController.getById)
router.get("/books/genres/:id", bookController.getBookByGenre)
router.patch("/books/:id", bookController.updateBook)

module.exports = router;
