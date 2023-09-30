const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(indexRoutes);

app.listen(port, () => {
  console.log("App running on http://localhost:3000");
});
