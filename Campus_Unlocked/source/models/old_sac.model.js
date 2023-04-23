const mongoose = require("mongoose");

const old_sacSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const old_sacModel = mongoose.model("old_sac", old_sacSchema);

module.exports = old_sacModel;
