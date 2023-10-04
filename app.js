const express = require("express");
const indexRoutes = require("./routes/index.routes");
const apiRoutes = require("./api/claims.api");
const { openDB, createTables, closeDB } = require("./database/database.js");

const app = express();
const port = 3000;

const db = openDB();
createTables(db);

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);
app.use(apiRoutes);

app.listen(port, () => {
  console.log("App running on http://localhost:3000");
});

process.on("SIGINT", () => {
  closeDB();
  process.exit(0);
});
