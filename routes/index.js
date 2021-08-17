const express = require("express");
const router = express.Router();

console.log("Router is loaded");

// calling the home controller in  router
const homeController = require("../controllers/home_controller");
router.get("/",homeController.home);

// for any further routes acess from here
// router.use("/routerName", require("./routerFile"));

router.use("/lists",require("./list"));  // works on localhost: 9000/lists/listPath 

module.exports = router;