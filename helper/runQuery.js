const { connection } = require("../repository/connection");
const {NoDataFound} = require("./error")
async function runQuery(query, values) {
    return new Promise((resolve, reject) => {
      connection.query(query, values, (err, results) => {
        if (err) {
          console.error('Query Error:', err);
          reject(err);
          return;
        }  
        if (results.length === 0) {
          reject(new NoDataFound('No data found.'));
          return;
        }
        resolve(results);
      });
    });
  }
  module.exports = {runQuery}