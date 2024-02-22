import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </li>
     
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/checkout" className="nav-link">
          Checkout
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
