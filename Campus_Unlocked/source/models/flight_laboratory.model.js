const mongoose = require("mongoose");

const flight_laboratorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const flight_laboratoryModel = mongoose.model("flight_laboratory", flight_laboratorySchema);

module.exports = flight_laboratoryModel;
