const connection = require("../database/index").promise();

const getAll = (callback) => {
  const query = "SELECT * FROM user";
  connection.query(query, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const getUserById = (userId) => {
  const querytwo = "SELECT * FROM user WHERE user_Id = ?";
  return connection.query(querytwo, [userId])
    .then(([result]) => {
      return result[0];
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  getAll,
  getUserById
};

