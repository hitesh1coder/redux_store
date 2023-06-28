import React, { useEffect } from "react";
import { addToCart } from "../../../Redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="product_div">
      <img className="card_img" src={product.image} alt={product.title} />
      <div className="card_body">
        <h4>{product.title.slice(0, 40)}</h4>
        <h2>Price : {product.price} $</h2>
        <p className="rating">Rating {product.rating.rate}</p>{" "}
        <span>Reviews {product.rating.count} </span>
        <div className="product_btns">
          <button
            onClick={() => {
              dispatch(addToCart(product));
            }}
            className="cart_btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
