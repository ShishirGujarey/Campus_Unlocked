const mongoose = require("mongoose");

const pronite_groundSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const pronite_groundModel = mongoose.model("pronite_ground", pronite_groundSchema);

module.exports = pronite_groundModel;
