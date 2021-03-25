import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./HeaderMain.css";

function HeaderMain() {
  return (
    <div className="header__main">
      <div className="header__left">
        <div className="header__menu">
          <MenuIcon className="header__menuIcon" fontSize="small" />
          <span className="header__menuAll">All</span>
        </div>
      </div>
      <div className="header__right">
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Gift Cards</span>
        <span>Sell</span>
        <span>Registry</span>
      </div>
    </div>
  );
}

export default HeaderMain;
