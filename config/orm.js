const connection = require("./connection.js");

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err, res) => {
      console.log("I work");
    });
  },

  insertOne(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table}`;
    connection.query(queryString, (err, res) => {
      console.log("I work");
    });
  },

  updateOne(table, objColVals, condition, cb) {
    const queryString = `UPDATE ${table}`;
    connection.query(queryString, (err, res) => {
      console.log("I work");
    });
  },
};

module.exports = orm;
