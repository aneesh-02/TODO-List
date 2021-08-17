const express = require("express");
const router = express.Router();

console.log("List Router is loaded");

//calling the list controller in this router
const listController = require("../controllers/list_controller");
router.get("/listPath",listController.lists);




module.exports = router;
