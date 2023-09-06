import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
const CartItems = () => {
	let items = useSelector(state => state.cart.itemsList);
	let ListOfItems = items.map(item => {
		return (
			<li key={nanoid()}>
				<CartItem id={item.id} price={item.price} name={item.name} quantity={item.quantity} total={item.totalPrice} />
			</li>
		);
	})
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
	  <li></li>
        {ListOfItems}
      </ul>
    </div>
  );
};

export default CartItems;
