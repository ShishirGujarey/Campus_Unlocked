const mongoose = require("mongoose");

const rm_kdSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const rm_kdModel = mongoose.model("rm_kd", rm_kdSchema);

module.exports = rm_kdModel;
