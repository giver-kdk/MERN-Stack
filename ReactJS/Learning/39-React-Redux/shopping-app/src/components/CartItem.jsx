import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
function CartItem({ id, price, name, quantity, total }){
	let dispatch = useDispatch();
	function handleIncrement()
	{
		dispatch(cartActions.addToCart({id, name, price}));
	}
	function handleDecrement()
	{
		dispatch(cartActions.removeFromCart({id, name, price}));
	}
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={handleDecrement} className="cart-actions" >
        -
      </button>
      <button onClick={handleIncrement} className="cart-actions" >
        +
      </button>
    </div>
  );
};

export default CartItem;
