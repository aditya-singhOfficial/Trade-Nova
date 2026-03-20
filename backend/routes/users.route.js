const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/users.controller.js");
const authMiddleware = require("../middleware/auth.middleware");

router.route("/signup").post(signup);
router.route("/login").post(login)

module.exports = router;