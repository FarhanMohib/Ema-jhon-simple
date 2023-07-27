import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav className="header-container">
        <a href="/shop">Shop</a>
        <a href="/order">Order-Reviw</a>
        <a href="/inventory">Manage-Inventory Here</a>
      </nav>
    </div>
  );
};

export default Header;
