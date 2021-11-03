const exp = require("constants");
const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Title test",
  });
});

app.use((req, res) => {
  res.send("Page not found: 404");
});

const port = process.env.PORT || 8089;
app.listen(port, console.log("Server listening on port", port));
