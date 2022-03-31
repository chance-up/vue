var express = require("express");
var router = express.Router();

router.get("/first", function (req, res) {
  res.json({ id: 1, name: "first" });
});

module.exports = router;
