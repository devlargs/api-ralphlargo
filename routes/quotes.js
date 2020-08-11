const express = require("express");
const router = express.Router();
const Quotes = require("../models/quotes.model");

router.get("/", async function (req, res) {
  try {
    const data = await Quotes.find().exec();
    res.send({
      status: 200,
      data,
    });
  } catch (err) {
    res.send({
      status: 400,
      err,
    });
  }
});

module.exports = router;
