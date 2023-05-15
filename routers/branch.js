const express = require("express");
const router = express.Router();

const {
  getAllbranch,
  updateBranch,
} = require("../controller/branch_controller");

const { verifyToken } = require("../middleware/jwt_middleware");
const { is_admin } = require("../middleware/authorization");

router.all("*", verifyToken);
router.get("/", getAllbranch);
router.put("/", is_admin, updateBranch);

module.exports = router;
