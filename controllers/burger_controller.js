const express = require("express");

const router = express.Router();

//Here to import database functions
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const obj = {
      burgers: data,
    };
    console.log("Working Server?");
    res.render("index", obj);
  });
});

module.exports = router;
