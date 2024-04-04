const mongoose = require("mongoose");
require("dotenv").config();

async function Database() {
  try {
    await mongoose.connect(process.env.CLUSTER, { useNewUrlParser: true });
  } catch (err) {
    console.error(err);
  }
}

module.exports = Database;
