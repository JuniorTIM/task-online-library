const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const router = Router();

router.post("/users", userController.postUser);
router.patch("/admin/users/:id", userController.blockUser);
router.patch("/users/take/:id", userController.takeBook);
router.patch("/users/back/:id", userController.backBook);

module.exports = router;