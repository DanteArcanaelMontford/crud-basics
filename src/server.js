const exp = require("constants");
const express = require("express");
const path = require("path");
const db = require("./database");
const routes = require("./routes");

const app = express();

db.connect();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use((req, res) => {
  res.send("Page not found: 404");
});

const port = process.env.PORT || 8089;
app.listen(port, console.log("Server listening on port", port));
