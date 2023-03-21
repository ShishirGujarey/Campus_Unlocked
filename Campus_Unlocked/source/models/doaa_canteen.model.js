const mongoose = require("mongoose");

const doaa_canteenSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const doaa_canteenModel = mongoose.model("doaa_canteen", doaa_canteenSchema);

module.exports = doaa_canteenModel;
