const express = require("express");
const indexRoutes = require("./routes/index.routes");

const {
  initializeDatabase,
  createTables,
  closeDatabase,
} = require("./database/database.js");

const app = express();
const port = 3000;

const db = initializeDatabase();
createTables(db);

app.set("view engine", "ejs");

app.use(indexRoutes);

app.listen(port, () => {
  console.log("App running on http://localhost:3000");
});

process.on("SIGINT", () => {
  closeDatabase();
  process.exit(0);
});
