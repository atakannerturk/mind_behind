const { GET_ALL_BRANCH, UPDATE_BRANCH } = require("./queries");
const { runQuery } = require("../helper/runQuery");
const { ErrorHandler } = require("../helper/error");

async function get_all_branch() {
  try {
    const query = GET_ALL_BRANCH;
    const results = await runQuery(query);
    return results;
  } catch (error) {
    throw new ErrorHandler(error.status || 404, error.message);
  }
}

async function update_branch({
  id,
  latitude,
  longitude,
  name,
  full_adress,
  phone,
}) {
  try {
    const query = UPDATE_BRANCH;
    const values = [latitude, longitude, name, full_adress, phone, id];
    const results = await runQuery(query, values);
    return results;
  } catch (error) {
    throw new ErrorHandler(error.status || 404, error.message);
  }
}

module.exports = {
  get_all_branch,
  update_branch,
};
