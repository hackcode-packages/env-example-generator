var mongoose = require("mongoose");
//const keys = require('../config/keys');
const dotenv = require("dotenv").config();

mongoose.Promise = global.Promise;

const url = process.env.MONGO_URI;
mongoose.connect(url, { useNewUrlParser: true });

var db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoServer");
});
db.on("error", (err) => {
  console.log(err);
});

module.exports = { mongoose };
