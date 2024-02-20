import React from "react";

function Menu(props) {
  return (
    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li className="nav-item ">
        <a className="nav-link" href="index.html">
          Home
        </a>
      </li>
      <li className="active">
        <a className="nav-link" href="shop.html">
          Shop
        </a>
      </li>
      <li>
        <a className="nav-link" href="about.html">
          About us
        </a>
      </li>
      <li>
        <a className="nav-link" href="services.html">
          Services
        </a>
      </li>
      <li>
        <a className="nav-link" href="blog.html">
          Blog
        </a>
      </li>
      <li>
        <a className="nav-link" href="contact.html">
          Contact us
        </a>
      </li>
    </ul>
  );
}

export default Menu;
