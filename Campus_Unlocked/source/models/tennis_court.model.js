const mongoose = require("mongoose");

const tennis_courtSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const tennis_courtModel = mongoose.model("tennis_court", tennis_courtSchema);

module.exports = tennis_courtModel;
