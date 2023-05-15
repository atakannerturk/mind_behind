const { GET_ROLES } = require("../repository/queries");
const { ErrorHandler } = require("../helper/error");
const { runQuery } = require("../helper/runQuery");

async function is_admin(req, res, next) {
  try {
    const query = GET_ROLES;
    const { id } = req.user;
    const results = await runQuery(query, id);
    if (results[0].role !== "admin") {
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
