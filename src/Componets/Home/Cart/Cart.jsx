import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { removeToCart } from "../../../Redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeToCart(productId));
  };
  return (
    <>
      <Header />
      <div className="cart_container">
        <div className="Cart">
          {cartItem?.map((item) => {
            return (
              <div key={item.id} className="cart_item">
                <div className="cart_image">
                  <img className="cart_img" src={item.image} alt="" />
                </div>
                <div className="cart_details">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <h2>Price : {item.price} $</h2>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="buy_btn"
                  >
                    removeItem
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
