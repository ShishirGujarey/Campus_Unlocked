const mongoose = require("mongoose");

const swimming_poolSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const swimming_poolModel = mongoose.model("swimming_pool", swimming_poolSchema);

module.exports = swimming_poolModel;
