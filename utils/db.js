require("dotenv").config();

const database = require("mongoose");

database.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useFindAndModify: false },
  err => {
    if (err) throw err;
  }
);

module.exports = database;
