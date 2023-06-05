const { ErrorHandler } = require("../helper/error");

async function is_admin(req, res, next) {
  try {
    if (req.user.role !== "admin") {
      return next(new ErrorHandler(400, "Only Admin"));
    }
    next();
  } catch (error) {
    throw new ErrorHandler(error.status || 404, error.message);
  }
}
module.exports = {
  is_admin,
};
