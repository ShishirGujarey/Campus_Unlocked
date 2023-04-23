const mongoose = require("mongoose");

const stadiumSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const stadiumModel = mongoose.model("stadium", stadiumSchema);

module.exports = stadiumModel;
