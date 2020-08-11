const mongoose = require("mongoose");

const Quotes = mongoose.model("Quotes", {
  author: String,
  name: String,
});

module.exports = Quotes;
