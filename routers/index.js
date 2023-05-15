const express = require("express");
const branch = require("./branch");
const auth = require("./auth");
const router = express.Router();

router.use("/branch", branch);
router.use("/auth", auth);

module.exports = router;
