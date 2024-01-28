const express = require("express");
const router = express.Router();
// Import the controllers for using instead of writing all functions here
const {getHome, getAbout} = require("../controllers/home");

// Before using Controller
// router.get("/", (req, res) => {
// 	res.send("Home Page");
// });
// After using Controller
router.get("/", getHome);
router.get("/about", getAbout);

// Another method to set router
// router.route("/").get(getHome);
// router.route("/about").get(getAbout);

module.exports = router;