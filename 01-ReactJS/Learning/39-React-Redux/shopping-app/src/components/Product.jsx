import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Product = ({ name, id, imgURL, price }) => {
	let dispatch = useDispatch();
	function handleAdd()
	{
		dispatch(cartActions.addToCart({id, name, price}));
	}
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
};

export default Product;
