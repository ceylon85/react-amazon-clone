import React from "react";
import "./LoginFooter.css";

function LoginFooter() {
  return (
    <div className="loginFooter">
      <div className="loginFooter__container">
        <div className="loginFooter__divider"></div>
        <div className="loginFooter__row">
          <span className="loginFooter__seperator"/>
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" alt="이용약관">
            <span className="footer__text">Condition of Use</span>
          </a>
          <span className="loginFooter__seperator"/>
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496" alt="개인정보 보호정책">

          <span className="footer__text">Privacy Notice</span></a>
          <span className="loginFooter__seperator"/>
          <a href="https://www.amazon.com/gp/help/customer/display.html" alt="아마존 help">

          <span className="loginFooter__text">Help</span></a>
          <span className="loginFooter__seperator"/>
        </div>
        <div className="loginFooter__row2">
          <span className="loginFooter__text2">© 2021 Amazon clone</span>
          <span className="loginFooter__seperator"/>
          <a href="https://github.com/ceylon85/react-amazon-clone">
            <img
              className="git__logo2"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="git"
              title="클릭하시면 github로 이동합니다"
            />
          </a>
        </div>
        {/* <span className="footer__backToTopText">Back top Top</span> */}
      </div>
    </div>
  );
}

export default LoginFooter;
