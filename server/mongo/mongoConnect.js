const mongoose = require("mongoose");

const mongooseConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/simple-mern", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Successfully Connect to Simple Mern`);
    })
    .catch((e) => {
      console.log({ e });
    });
};

module.exports = mongooseConnect;
