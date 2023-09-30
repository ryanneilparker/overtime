const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/overview", (req, res) => {
  res.render("overview.ejs");
});

router.get("/create", (req, res) => {
  res.render("create.ejs");
});

module.exports = router;
