const mongoose = require("mongoose");

const dbName = 'crud-basics'

function connect() {
  mongoose.connect(
    `mongodb://root:1234@localhost:27017/${dbName}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
  );

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected");
  });

  db.on("error", console.error.bind(console, "connection error"));
}

module.exports = {
    connect
}
