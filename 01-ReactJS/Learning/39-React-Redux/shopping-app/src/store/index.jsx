import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import noticeSlice from "./noticeSlice";

const store = configureStore({
	reducer: {
		// These reducer names are state names(keys) and are sensitive
		auth: authSlice.reducer,
		cart: cartSlice.reducer,
		notice: noticeSlice.reducer,
	}
});
export default store;
