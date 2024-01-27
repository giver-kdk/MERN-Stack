const express = require("express");
// Create router object. Remember capital 'R' in 'Router()'
const router = express.Router();

// Related Routes
router.get("/", (req, res) => {
	res.send("Home Page");
});

router.get("/about", (req, res) => {
	res.send("About Page");
});
// Export Router
module.exports = router;