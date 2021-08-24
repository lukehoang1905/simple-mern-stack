const Sample = require("../mongo/models/Sample.model");
const sampleControllers = {};

sampleControllers.getAllSamples = async (req, res, next) => {
  let result;
  try {
    result = await Sample.find({ isDeleted: false });
  } catch (error) {
    res.error(error);
  }
  res.send({ data: result, message: "success" });
};

sampleControllers.createSample = async (req, res, next) => {
  let result;
  const contentObject = req.body;

  try {
    result = await Sample.create(contentObject);
  } catch (error) {
    res.error(error);
  }
  res.send({ data: result, message: "success" });
};

sampleControllers.updateSample = async (req, res, next) => {
  const id = req.params.id;
  const updateObject = req.body;
  if (!id || !updateObject) return res.error("need detail");
  let result;
  try {
    result = await Sample.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
  } catch (error) {
    res.error(error);
  }
  res.send({ data: result, message: "success" });
};
sampleControllers.deleteSample = async (req, res, next) => {
  let result;
  const id = req.params.id;
  if (!id) return res.error("need detail");

  try {
    result = await Sample.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
  } catch (error) {
    res.error(error);
  }
  res.send({ data: result, message: "success" });
};
module.exports = sampleControllers;
