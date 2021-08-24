const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sampleSchema = Schema(
  {
    name: String,
    content: String,
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;
