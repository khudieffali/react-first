import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import "./header.scss";
import { useBasket } from "../../contexts/BasketContext";
import { useLanguage } from "../../contexts/LanguageContext";
const Header = ({num}) => {
  const {changeLanguage}=useLanguage()
  const [bgColor, setBgColor] = useState("");
  console.log("Header re-render")
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
                <button  onClick={(e) =>changeLanguage("AZ")}>Az</button>
                <button onClick={(e) => changeLanguage("EN")}>En</button>
              </li>
              <li>
                <Link to="/">
                  <i className="far fa-circle-user" />
                  <br />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <i className="fas fa-shopping-basket" /> Shop {num}
                </Link>
              </li>
              <li>
                <Link to="/haqqimizda">Add Product</Link>
              </li>
              <li>
                <Link to="/addproducttwo">Add Product Two</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
};

export default React.memo(Header);
