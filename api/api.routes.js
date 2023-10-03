const express = require("express");
const router = express.Router();
const { openDB } = require("../database/database");

const db = openDB();

router.post("/claims", (req, res) => {
  const { claimantID, reviwerID, statusID, createdDate } = req.body;

  db.run(
    "INSERT INTO CLAIM (claimantID, reviewerID, statusID, createdDate) VALUES (?, ?, ?, ?)",
    [claimantID, reviwerID, statusID, createdDate],
    function (error) {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

router.get("/claims", (req, res) => {
  db.run("SELECT * FROM CLAIM", (error, rows) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
