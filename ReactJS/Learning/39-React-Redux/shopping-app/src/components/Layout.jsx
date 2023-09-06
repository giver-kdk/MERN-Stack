import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Notification from "./Notification";
const Layout = () => {
  	let items = useSelector(state => state.cart.itemsList);
	let isVisibile = useSelector(state => state.cart.showCart);
	let total = 0;
	items.forEach(item => {
		total += item.totalPrice;
	});
	let notice = useSelector(state => state.notice);
  return (
    <React.Fragment>
      <div className="layout">
	  	<Notification severity = {notice.severity} visibility={notice.visibility} message={notice.message}/>
        <Header />
        <Products />
		{isVisibile && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
