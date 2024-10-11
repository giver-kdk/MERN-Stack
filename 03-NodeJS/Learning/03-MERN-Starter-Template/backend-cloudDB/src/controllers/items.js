// Export methods to handle the requests. Use mongoose model object and its methods for CRUD Operations
const Item = require("../models/Item");
const {createCustomError} = require("../errors/custom-error");

// READ ALL Operation
async function getAllItems(req, res)
{
	try{
		const items = await Item.find({});					// Find items with empty filter condition
	
		if(!items){
			const error = createCustomError(`No data was found`, 404);		// Display custom error 
			res.status(404).json({error});
		}
		else res.status(200).json({items});					// Send fetched data as response(with 'item' key)	
	}
	catch(err){
		console.log(err.message);
		res.status(500).json({err});
	}
}

// READ Operation
async function getItem(req, res)
{
	try{
		const {id: item_id} = req.params;					// Assign 'id' from 'req.params' to 'item_id'
		const item = await Item.findOne({_id: item_id});	// Find document whose '_id' == 'item_id'
	
		if(!item){
			const error = createCustomError(`Document with Id: ${item_id} was not found in the collection`, 404);		// Display custom error 
			res.status(404).json({error});
		}
		else res.status(200).json({item});					// Send fetched data as response(with 'item' key)		
	}
	catch(err){
		console.log(err.message);
		res.status(500).json({err});
	}
}

// CREATE Operation
async function createItem(req, res)
{
	try{
		const input_item = req.body;
		const item = await Item.create(input_item);			// Find items with empty filter condition
	
		if(!item){
			const error = createCustomError(`Failed to create document in the collection`, 404);		// Display custom error 
			res.status(404).json({error});
		}
		else res.status(201).json({item});					// Send fetched data as response(with 'item' key)
	}
	catch(err){
		console.log(err.message);
		res.status(500).json({err});
	}
}

// UPDATE Operation
async function updateItem(req, res)
{
	try{
		const {id: item_id} = req.params;
		const input_item = req.body;
		const item = await Item.findOneAndUpdate({_id: item_id}, input_item, {
			new: true,										// Return new item instead of old 
			runValidators: true,							// Enable data validation for update too (Eg: 'required')
		});
	
		if(!item){
			const error = createCustomError(`Failed to update document of Id: ${item_id} in the collection`, 404);		// Display custom error 
			res.status(404).json({error});
		}
		else res.status(200).json({item});					// Send updated data as response(with 'item' key)	
	}
	catch(err){
		console.log(err.message);
		res.status(500).json({err});
	}
}


// DELETE Operation
async function deleteItem(req, res)
{
	try{
		const {id: item_id} = req.params;
	
		const item = await Item.findOneAndDelete({_id: item_id});	// Find items with empty filter condition
	
		if(!item){
			const error = createCustomError(`Failed to delete document of Id: ${item_id} in the collection`, 404);		// Display custom error 
			res.status(404).json({error});
		}
		else res.status(200).json({item});						// Send deleted data as response(with 'item' key)	
	}
	catch(err){
		console.log(err.message);
		res.status(500).json({err});
	}
}

module.exports = {
	getAllItems, 
	getItem, 
	createItem,
	updateItem,
	deleteItem
};
