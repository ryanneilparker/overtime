const sqlite3 = require("sqlite3");

function openDB() {
  const db = new sqlite3.Database("./database/database.db");
  return db;
}

function createTables(db) {
  db.serialize(() => {
    db.run(`
          CREATE TABLE IF NOT EXISTS CLAIMANT (
            claimantID INTEGER PRIMARY KEY
          )
        `);

    db.run(`
          CREATE TABLE IF NOT EXISTS REVIEWER (
            reviewerID INTEGER PRIMARY KEY
          )
        `);

    db.run(`
          CREATE TABLE IF NOT EXISTS STATUS (
            statusID INTEGER PRIMARY KEY,
            statusName TEXT
          )
        `);

    db.run(`
          CREATE TABLE IF NOT EXISTS CLAIM (
            claimID INTEGER PRIMARY KEY,
            claimantID INTEGER,
            reviewerID INTEGER,
            statusID INTEGER,
            createdDate DATETIME,
            overtimeDate DATETIME,
            overtimeType TEXT,
            overtimeHours FLOAT,
            overtimeReason TEXT,
            FOREIGN KEY (claimantID) REFERENCES CLAIMANT(claimantID),
            FOREIGN KEY (reviewerID) REFERENCES REVIEWER(reviewerID),
            FOREIGN KEY (statusID) REFERENCES STATUS(statusID)
          )
        `);

    db.run(`
          CREATE TABLE IF NOT EXISTS CLAIM_DECISION (
            decisionID INTEGER PRIMARY KEY,
            claimID INTEGER,
            reviewerID INTEGER,
            decision BOOLEAN,
            reviewedDate DATETIME,
            FOREIGN KEY (claimID) REFERENCES CLAIM(claimID),
            FOREIGN KEY (reviewerID) REFERENCES REVIEWER(reviewerID)
          )
        `);
  });
}

function closeDB(db) {
  db.close((error) => {
    if (error) {
      console.error("Error closing database:", error.message);
    } else {
      console.log("Database closed.");
    }
  });
}

module.exports = {
  openDB,
  createTables,
  closeDB,
};
