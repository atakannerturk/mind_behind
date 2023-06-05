const GET_ALL_BRANCH = "SELECT * FROM branch;";
const USER_LOGIN = "SELECT * FROM user WHERE user_name = ? AND password = ?;";
const UPDATE_BRANCH =
  "UPDATE branch SET latitude=? ,longitude=?, name=?, full_adress=?, phone=? WHERE id=?;";
module.exports = { GET_ALL_BRANCH, USER_LOGIN, UPDATE_BRANCH};
