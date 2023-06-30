//const bachelor = require("../controllers/bachelor");

//router.use('/bachelor', require('./bachelor'))
const express = require("express");
const router = express.Router();

const bachelor = require("./bachelor.js");
const bachelorette = require("./bachelorette.js");

module.exports = { bachelor, bachelorette };
