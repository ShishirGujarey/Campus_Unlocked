const mongoose = require("mongoose");

const auditoriumSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const auditoriumModel = mongoose.model("auditorium", auditoriumSchema);

module.exports = auditoriumModel;
