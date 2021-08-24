const express = require("express");
const {
  getAllSamples,
  createSample,
  updateSample,
  deleteSample,
} = require("../controllers/sampleControllers");

const router = express.Router();

/* GET samples listing. */
router.get("/", getAllSamples);

/* POST sample. */
router.post("/", createSample);

/* PUT sample with id. */
router.put("/:id", updateSample);

/* DELETE sample with id. */
router.delete("/:id", deleteSample);

module.exports = router;
