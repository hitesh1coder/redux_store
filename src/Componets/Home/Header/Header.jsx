import React from "react";
import Cart from "../Cart/Cart";
import CartIcon from "../../../Images/icons8-cart-64.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItem = useSelector((state) => state.cart);

  const cartTotal = cartItem
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  return (
    <div className="header">
      <Link to="/">
        <h3>WebStore</h3>
      </Link>
      <div className="total_cart_amount">
        <h3>Total Cart Amount:$ {cartTotal} </h3>
      </div>
      <Link to="/cart">
        <div className="cart_icon">
          <img src={CartIcon} alt="icon" />
          <p>{cartItem.length}</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
