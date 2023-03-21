const mongoose = require("mongoose");

const hockey_groundSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const hockey_groundModel = mongoose.model("hockey_ground", hockey_groundSchema);

module.exports = hockey_groundModel;
