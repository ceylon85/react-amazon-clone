import React from "react";
import "./FooterCol.css";

function FooterCol() {
  return (
    <div className="footer__Colmain">
      <div className="footer__Coldivide"></div>
      <div className="footer__VerticalCol">
        <div className="footer__Col">
          <div className="footer__ColHead">Get To Know Us</div>
          <ul className="footer__ColList">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>
        <div className="footer__Col">
          <div className="footer__ColHead">Make Money with us</div>

          <ul className="footer__ColList">
            <li>Sell on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell Your Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>
        <div className="footer__Col">
          <div className="footer__ColHead">Amazon Payment Products</div>
          <ul className="footer__ColList">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>

        <div className="footer__Col">
          <div className="footer__ColHead">Let Us Help You</div>

          <ul className="footer__ColList">
            <a href="https://covid19-tracker-b0155.web.app/">Covid19 Project </a>
            <li>Your Accunt</li>
            <li>Your Orders</li>
            <li>Shipping Rates &amp; Policies</li>
            <li>Returns &amp; Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterCol;
