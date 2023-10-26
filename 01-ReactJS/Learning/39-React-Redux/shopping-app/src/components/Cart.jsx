import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const Cart = () => {
	let quantity = useSelector(state => state.cart.totalQuantity);
	let dispatch = useDispatch();
	function toggleCart()
	{
		dispatch(cartActions.toggleCartShow());
	}
  return (
    <div className="cartIcon">
      <h3 onClick={toggleCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
