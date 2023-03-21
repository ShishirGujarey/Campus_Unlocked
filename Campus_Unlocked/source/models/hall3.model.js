const mongoose = require("mongoose");

const hall3Schema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const hall3Model = mongoose.model("hall3", hall3Schema);

module.exports = hall3Model;
