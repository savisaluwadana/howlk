const mongoose = require("mongoose");
const startersSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    min: 5,
    trim: true,
  },
  preDesc: {
    type: String,
    required: true,
    min: 5,
    trim: true,
  },
  content: {
    type: Array,
    default: [String],
  },
  postDesc: {
    type: String,
    required: true,
    min: 5,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    min: 5,
    trim: true,
    default: "mains",
  },
});

const startersModel = mongoose.model("mains", startersSchema);
module.exports = startersModel;
