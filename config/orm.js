const connection = require("./connection.js");

const orm = {
  selectAll() {
    connection.query(queryString, (err, res) => {
      console.log("I work");
    });
  },

  insertOne() {
    connection.query(queryString, (err, res) => {
      console.log("I work");
    });
  },

  updateOne() {
    connection.query(queryString, (err, res) => {
      console.log("I work");
    });
  },
};

module.exports = orm;
