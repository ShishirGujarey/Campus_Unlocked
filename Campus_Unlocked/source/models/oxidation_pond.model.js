const mongoose = require("mongoose");

const oxidation_pondSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const oxidation_pondModel = mongoose.model("oxidation_pond", oxidation_pondSchema);

module.exports = oxidation_pondModel;
