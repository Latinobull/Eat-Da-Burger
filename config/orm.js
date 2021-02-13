const connection = require("./connection.js");

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    connection.query(queryString, vals, (err, res) => {
      if (err) throw err;
      cb(res);
      console.log("Burger has created!");
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
