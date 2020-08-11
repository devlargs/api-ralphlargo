var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({
    envName: process.env.AWS_ENVIRONMENT_NAME,
  });
});

module.exports = router;
