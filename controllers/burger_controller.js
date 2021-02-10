const express = require("express");

const router = express.Router();

//Here to import database functions

router.get("/", (req, res) => {
  res.render("index", "HI");
});

module.exports = router;
