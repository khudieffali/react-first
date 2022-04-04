import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const [bgColor, setBgColor] = useState("");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setBgColor("active-header");
    } else {
      setBgColor("");
    }
  });

  return (
    <header className={`header ${bgColor}`}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <Link to="/" className="text-white">
              <h2>Logo</h2>
            </Link>
          </div>
          <ul className="d-flex list-unstyled">
            <li>
              <Link to="/">
                <i className="far fa-circle-user" /> Home
              </Link>
            </li>
            <li>
              <Link to="/products">
                <i className="fas fa-shopping-basket" /> Shop
              </Link>
            </li>
            <li>
              <Link to="/haqqimizda">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
