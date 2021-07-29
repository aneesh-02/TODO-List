const express = require("express");
const router = express.Router();

console.log("Router is loaded");

const homeController = require("../controllers/home_controller");
router.get("/",homeController.home);

// for any further routes acess from here
// router.use("/routerName". require("./routerFile"));

module.exports = router;