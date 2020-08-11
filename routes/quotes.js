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

router.get("/random", function (req, res) {
  try {
    Quotes.count().exec((err, count) => {
      const random = Math.floor(Math.random() * count);
      if (err) {
        res.send({
          status: 400,
          err,
        });
      } else {
        Quotes.findOne()
          .skip(random)
          .exec((findErr, data) => {
            if (findErr) {
              res.send({
                err: findErr,
                status: 400,
              });
            } else {
              res.send({
                status: 200,
                data,
              });
            }
          });
      }
    });
  } catch (err) {
    res.send({
      status: 400,
      err,
    });
  }
});

module.exports = router;
