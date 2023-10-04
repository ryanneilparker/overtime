const express = require("express");
const router = express.Router();
const { openDB } = require("../database/database");

const db = openDB();

router.post("/claims", (req, res) => {
  const reviewerID = 1; //TODO: Get the reviewers id from passport
  const claimantID = 1; // TODO: Get the actual user id from passport
  const createdDate = new Date().toISOString();
  const statusID = 0;
  const { overtimeDate, overtimeType, overtimeHours, overtimeReason } =
    req.body;

  db.run(
    "INSERT INTO CLAIM (claimantID, reviewerID, statusID, createdDate, overtimeDate, overtimeType, overtimeHours, overtimeReason) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      claimantID,
      reviewerID,
      statusID,
      createdDate,
      overtimeDate,
      overtimeType,
      overtimeHours,
      overtimeReason,
    ],
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
  db.all("SELECT * FROM CLAIM WHERE statusID = 0", (error, rows) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(rows);
  });
});

// router.put('/claims/:id', (req, res) => {
//   const claimID = req.params.id;
//   const { claimantID, reviewerID, statusID, createdDate } = req.body;
//   db.run(
//     'UPDATE CLAIM SET claimantID = ?, reviewerID = ?, statusID = ?, createdDate = ? WHERE claimID = ?',
//     [claimantID, reviewerID, statusID, createdDate, claimID],
//     function (err) {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({ message: 'Claim updated successfully' });
//     }
//   );
// });

module.exports = router;
