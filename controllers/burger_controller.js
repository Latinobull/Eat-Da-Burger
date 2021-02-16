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

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  console.log(req.body);
  const condition = `id = ${req.params.id}`;
  burger.updateOne({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
