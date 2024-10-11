// Assign controller for variations of base route
const express = require("express");
const router = express.Router();					// Create 'Router' object

// Import Controllers
const {
	getAllItems,
	createItem,
	getItem,
	updateItem,
	deleteItem,
} = require("../controllers/items");

router.get('/', getAllItems);						// Controller for 'base_url/'
router.post('/', createItem);
router.get('/:id', getItem);						// Controller for 'base_url/:id' 
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;