const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const sampleApi = require("./sample");
router.use("/samples", sampleApi);

module.exports = router;
