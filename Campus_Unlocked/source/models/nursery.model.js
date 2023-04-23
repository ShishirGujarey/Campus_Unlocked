const mongoose = require("mongoose");

const nurserySchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const nurseryModel = mongoose.model("nursery", nurserySchema);

module.exports = nurseryModel;
