const mongoose = require("mongoose");

const mama_mioSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const mama_mioModel = mongoose.model("mama_mio", mama_mioSchema);

module.exports = mama_mioModel;
