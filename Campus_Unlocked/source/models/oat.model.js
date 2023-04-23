const mongoose = require("mongoose");

const oatSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const oatModel = mongoose.model("oat", oatSchema);

module.exports = oatModel;
