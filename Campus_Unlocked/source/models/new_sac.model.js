const mongoose = require("mongoose");

const new_sacSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const new_sacModel = mongoose.model("new_sac", new_sacSchema);

module.exports = new_sacModel;
