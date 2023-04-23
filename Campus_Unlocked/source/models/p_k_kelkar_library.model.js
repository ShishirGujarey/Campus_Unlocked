const mongoose = require("mongoose");

const p_k_kelkar_LibrarySchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

const p_k_kelkar_LibraryModel = mongoose.model("p_k_kelkar_Library", p_k_kelkar_LibrarySchema);

module.exports = p_k_kelkar_LibraryModel;
