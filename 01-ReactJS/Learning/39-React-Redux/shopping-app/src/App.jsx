import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { noticeActions } from "./store/noticeSlice";


function App() {
	// "auth" is the name given to the "reducer" when configuring store
	let loggedIn = useSelector(state => state.auth.isLoggedIn);
	let cart = useSelector(state => state.cart);
	let dispatch = useDispatch();
	// Perform backend request/response task inside "useEffect" hook
	useEffect(() =>{
		// Put the latest state value into the firebase database
		async function putData()
		{
			try
			{
				dispatch(noticeActions.setNotification({severity: 'warning', message: "Sending Request..."}));
				// Copy the DB link from firebase and add "CartData.json" at end to create new collection
				let res = await fetch("https://redux-http-4ae73-default-rtdb.firebaseio.com/CartData.json", {
					method: "PUT",
					body: JSON.stringify(cart)
				});
				// Get the response in JSON format
				let data = await res.json();
				console.log(data);
				dispatch(noticeActions.setNotification({severity: 'success', message: "Request Seccessful!"}));
			}
			catch
			{
				console.log("Error");
				dispatch(noticeActions.setNotification({severity: 'error', message: "Request Failed!"}));
			}
		}
		putData();
		// Here, this function runs everytime the "cart" state from redux store is changed
	}, [cart]);
  return (
    <div className="App">
		{!loggedIn && <Auth />}
		{loggedIn && <Layout />}
    </div>
  );
}

export default App;
