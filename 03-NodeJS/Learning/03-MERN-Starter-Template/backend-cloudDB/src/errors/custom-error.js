// Define Custom Error Handler
class CustomError extends Error{
	constructor(message, statusCode){
		super(message);
		this.statusCode = statusCode;
	}
}

// Method for creating custom error handler 
const createCustomError = (msg, status) => {
	return new CustomError(msg, status);
}

// Exporting both error handler method and class 
module.exports = {createCustomError, CustomError};
