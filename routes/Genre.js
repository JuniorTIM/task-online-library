const { Router } = require("express");
const { genreController } = require("../controllers/genres.controller");
const router = Router();

router.post("/admin/genres", genreController.postGenre);
router.get("/admin/genres", genreController.getAll);
router.patch("/admin/genres/:id", genreController.updateGenre);
router.delete("/admin/genre/:id", genreController.deleteGenre);

module.exports = router;