import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  desc: String,
  image: String,
  location: String
});

const Images = mongoose.model("image",Schema);

export default Images;
