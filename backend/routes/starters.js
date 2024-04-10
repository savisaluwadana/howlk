const express = require("express");
const Router = express.Router();
const mainModel = require("../models/mains");

Router.route("/").get(async (req, res) => {
  try {
    //needs to fetch from mains model

    const theData = await mainModel.find({ category: "main" });
    if (theData && theData.length) {
      res.status(200).json(theData);
    } else {
      res.status(404).json({ Alert: "No results found!" });
    }
  } catch (err) {
    console.error(err);
  }
});

Router.route("/sides").get(async (req, res) => {
  try {
    //needs to fetch from mains model

    const theData = await mainModel.find({ category: "sides" });
    if (theData && theData.length) {
      res.status(200).json(theData);
    } else {
      res.status(404).json({ Alert: "No results found!" });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = Router;
