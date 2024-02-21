import React from "react";

function Menu(props) {
  return (
    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li className="nav-item ">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="">
        <a className="nav-link" href="shop">
          Shop
        </a>
      </li>
      <li>
        <a className="nav-link" href="product">
          Product Details
        </a>
      </li>
      <li>
        <a className="nav-link" href="login">
          Login
        </a>
      </li>
      <li>
        <a className="nav-link" href="register">
          register
        </a>
      </li>
      <li>
        <a className="nav-link" href="checkout">
          checkout
        </a>
      </li>
    </ul>
  );
}

export default Menu;
