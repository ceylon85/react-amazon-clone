import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import HeaderMain from "./HeaderMain";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <nav className="header" id="nav-top">
        {/* amazon logo on the left => img */}
        <Link to="/">
          <div className="header__logo">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </div>
        </Link>
        {/* Search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" fontSize="large" />
        </div>

        {/* 4 Links */}
        <div className="header__nav">
          {/* 1st link */}
          {/* <Link to={!user && "/login"}> 콘솔창 Link to error*/}
          <Link to={!user ? "login" : "/"}>
            <div onClick={login} className="header__option">
              <span className="header__option1">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__option2">
                {" "}
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          {/* 2nd link */}

          <Link to={user ? "/payment" : "/login"} className="header__link">
            <div className="header__option">
              <span className="header__option1">Returns</span>
              <span className="header__option2"> & Orders</span>
            </div>
          </Link>

          {/* 3rd link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__option1">Your</span>
              <span className="header__option2"> Prime</span>
            </div>
          </Link>

          {/* 4th link */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* Shopping basket icon */}
              <ShoppingCartIcon fontSize="large" theme="filled" />
              {/* Number of items in the basket */}
              <span className="header__option2 header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <HeaderMain />
    </div>
  );
}

export default Header;
