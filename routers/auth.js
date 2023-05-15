const express = require("express");
const router = express.Router();
const { login, logout } = require("../controller/auth_controller");
const { verifyToken } = require("../middleware/jwt_middleware");
router.post("/login", login);
router.post("/logout", verifyToken, logout);

module.exports = router;
