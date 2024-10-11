// Define database schema with validation rule for particular item using Mongoose
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	name:{
		type: String, 													// Data Type of property
		required: [true, 'Must Provide Name'],							
		trim: true,														// Remove whitespaces from input
		maxlength: [20, "Name can't be more than 20 characters"],
		default: "No Name",												// Default value of property
	},
	price:{
		type: Number,
		required: [true, 'Must Provide Price'],
		default: 0,
	}
});

module.exports = mongoose.model('Item', ItemSchema);