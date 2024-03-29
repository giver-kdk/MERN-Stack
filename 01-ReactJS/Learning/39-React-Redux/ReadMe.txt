******************** Redux ********************
- Redux is a state management tool (library) 
- Redux keeps all the states of our complex app in sync
- Redux helps to manage more complex states than Context API
- Redux is used for large scale apps
- It's like a container that stores states of variables of an App
- React-Redux is redux combined with react. Because redux can also be used in Vue.js, Angular.js, etc.
- Redux-Toolkit is a standard tool for simplifying the use of redux
- Install the required packages using command:
	- npm install redux  @reduxjs/toolkit react-redux
- Redux has following terminologies: 
	1. Store: 
		- It is a container that stores all the global states of redux app 
		- Assume it like a database for a front-end
	2. Action: 
		- Its like an intruction to perform certain task. 
		- Can also assume like an event in JS
		- Its 2 properties are "type" and "payload"
		- "type" means what kind of action to perform. Assume it like an op-code
		- "payload" is just extra data for that action type. Assume it like an operand
	3. Dispatch: 
		- It means sending the instruction to the executor
	4. Reducer: 
		- It is the function that modifies states on the basis of Action specified
		- Can also assume as event handler in JS
		- NOTE: Reducer should always be synchronous. So, ansychronous task like HTTP request can't be done inside it.
- The workflow is: 
	- User triggers something in component
	- According to that, certain type of action is sent(Dispatched) to the Reducer
	- Reducer checks action type and updates the state 

- NOTE: ***** We generally use latest "Redux Toolkit" instead of old core "Redux" ***** 



******************** Redux Toolkit ********************
- Redux Toolkit has following terminologies: 
	1. configureStore():
		- Allows to create a redux store with all types of reducers in it 
	2. createSlice(): 
		- Allows to create blocks representing particular state and its related reducer functions
		- Has name, initialState and reducers property
	3. createAction():
		- Allows to create actions with easy syntax. But, this is optional.
	4. createReducer():
		- Allows to create reducer function with easy syntax. This is also optional.

- The workflow is: 
	- Slice is created for particular type of state (Make slices in individual files for clean code)
	- Store is created with slice's reducer and exported
	- Action is simply exported from each slice file

	- User triggers something in component (event)
	- According to that, certain slices's action function(arg_as_payload) is called directly
	- Reducer function of that particular slice updates respective state(event handling)

******************** Redux Thunk ********************
- A function in redux to handle redux and HTTP request

