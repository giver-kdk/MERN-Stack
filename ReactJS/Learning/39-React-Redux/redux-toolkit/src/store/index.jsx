import {configureStore, createSlice} from "@reduxjs/toolkit"

// Create slice for each type of state (Here is "counter")
// The slice contains state value and all types of related reducer functions
let counterSlice = createSlice({
	name: "counter",
	initialState: {counter: 0},
	reducers: {
		// Action type is generated automatically. So, no need to mention 
		increment(state, action){
			// We can directly modify the state using redux toolkit
			state.counter++;
		},
		decrement(state, action){
			state.counter--;
		},
		addBy(state, action){
			state.counter += action.payload;
		}
	}
});
// Need to export actions to allow autogeneration of action IDs
export let actions = counterSlice.actions;
// We have many reducer functions in "counterSlice". So, use "reducers" there
// But here, use "reducer" because all those functions are considered one
let MyStore = configureStore({reducer: counterSlice.reducer});
export default MyStore;
