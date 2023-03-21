const mongoose = require("mongoose");

const outreachSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const outreachModel = mongoose.model("outreach", outreachSchema);

module.exports = outreachModel;
