import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {isLoggedIn: false},
	reducers: {
		// No need to mention "function" key here
		login(){
			return {isLoggedIn: true};
		},
		logout(){
			return {isLoggedIn: false};
		}
	}
});
export const authActions = authSlice.actions;
export default authSlice;