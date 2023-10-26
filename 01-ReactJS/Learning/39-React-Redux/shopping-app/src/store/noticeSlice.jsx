import { createSlice } from "@reduxjs/toolkit";
const noticeSlice = createSlice({
	name: "notice",
	initialState: {
		visibility: false,
		severity: "warning",
		message: ""
	},
	reducers: {
		setNotification(state, action){
			return {
				visibility: true,
				severity: action.payload.severity,
				message: action.payload.message
			};
		},
		closeNotification(state, action){
			return {
				...state,
				visibility: false
			}
		}
	}
});
export const noticeActions = noticeSlice.actions;
export default noticeSlice;