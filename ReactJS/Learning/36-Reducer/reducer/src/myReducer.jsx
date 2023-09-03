// This custom reducer function contains all the logic to update the state
// Syntax: function function_name(current_state, action) { //Statements }
export default function myReducer(count, action)
{
	if(action.type == "incrementing")
	{
		return ++count;
	}
	else if(action.type == "decrementing")
	{
		return --count;
	}
	else
	{
		console.log("Error with action: ", action.type);
	}
}