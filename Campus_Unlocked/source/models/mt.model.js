const mongoose = require("mongoose");

const mtSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const mtModel = mongoose.model("mt", mtSchema);

module.exports = mtModel;
