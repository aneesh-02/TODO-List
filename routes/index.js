const express = require("express");
const router = express.Router();

console.log("Router is loaded");

const homeController = require("../controllers/home_controller");

module.exports = router;