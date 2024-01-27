const express = require("express");
const router = express.Router();
const {getProduct, createProduct, updateProduct} = require("../controllers/products");

// Clean router and controller 
router.get("/", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);

module.exports = router;