const express = require("express");
const router = express.Router();
const {getUser, userReview} = require("../controllers/user");

// Clean Router and Controller
router.get("/", getUser);
router.get("/review", userReview);

module.exports = router;