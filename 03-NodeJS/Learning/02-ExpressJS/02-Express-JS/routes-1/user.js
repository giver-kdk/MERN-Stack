const express = require("express");
// For router, create 'router' instead of 'app' 
const router = express.Router();

// Instead of 'app.get()', use 'router.get()'
router.get("/", (req, res) => {
	res.send("User Page");
});

router.get("/review", (req, res) => {
	res.send("User Review");
});

// Export this spedific router
module.exports = router;