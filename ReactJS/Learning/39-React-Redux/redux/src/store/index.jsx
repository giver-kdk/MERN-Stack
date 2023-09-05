// This is an old method of using Redux
// Here we create a store connected with it's reducer
import {createStore} from "redux"

// Our state is an object with "counter" property whose default value is 0
function reducer(state = {counter: 0}, action)
{
	// Reducer checks action type and updates state accordingly
	if(action.type === "INC")
	{
		// In "Redux", we can't modify original state. So, return a copy of state with modification
		// But, in "Redux Toolkit", we can modify the orginal state too.
		return {counter: state.counter + 1};
	}
	if(action.type === "DEC")
	{
		return {counter: state.counter - 1};
	}
	if(action.type === "ADDBY")
	{
		// Using "payload" like an operand
		return {counter: state.counter + action.payload};
	}
	return state;
}
let MyStore = createStore(reducer);
// Make the store available to Provider. So, that it can make store available to app
export default MyStore;