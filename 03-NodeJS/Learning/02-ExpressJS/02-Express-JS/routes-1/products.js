const express = require("express");
const router = express.Router();

// Base route 'product' is already mentioned in app.js
// So here, just writing '/' = '/product/'
router.get("/", (req, res) => {
	res.send("Product Page");
});

router.post("/", (req, res) => {
	res.send("Product Post Page");
});

router.put("/:id", (req, res) => {
	res.send("Product Update Page");
});

// Export this specific router
module.exports = router;