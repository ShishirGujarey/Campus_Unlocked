const mongoose = require("mongoose");

const park67Schema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const park67Model = mongoose.model("park67", park67Schema);

module.exports = park67Model;
