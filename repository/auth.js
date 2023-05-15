const {USER_LOGIN} = require("./queries");
const {runQuery} = require("../helper/runQuery")
const { ErrorHandler,NoDataFound } = require("../helper/error");

async function tryLogin(user_name, password) {
    try {
      const query = USER_LOGIN;
      const values = [user_name, password];
      const results = await runQuery(query, values);
      return {
        id : results[0].id,
        user_password : results[0].password,
        role : results[0].role
      };
    } catch (error) {
      switch (error.constructor) {
        case NoDataFound:
          throw new ErrorHandler(401, 'user_not_found');
        default:
          throw error;
      }
    }
  }
module.exports = {
    tryLogin
  };