const mongoose = require("mongoose");

const ccdSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const ccdModel = mongoose.model("ccd", ccdSchema);

module.exports = ccdModel;
