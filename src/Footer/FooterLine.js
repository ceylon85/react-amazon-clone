import React from "react";
import './FooterLine.css'

function FooterLine() {
  return (
    <div className="footer__line">
      <div className="footer__lineRow1">
        <span className="footer__seperator" />
        <a
          href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
          alt="이용약관"
        >
          <span className="footer__lineText1">Condition of Use</span>
        </a>
        <span className="footer__seperator" />
        <a
          href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
          alt="개인정보 보호정책"
        >
          <span className="footer__lineText1">Privacy Notice</span>
        </a>
        <span className="footer__seperator" />
        <a
          href="https://www.amazon.com/gp/help/customer/display.html"
          alt="아마존 help"
        >
          <span className="footer__lineText1">Help</span>
        </a>
        <span className="footer__seperator" />
      </div>
      <div className="footer__lineRow2">
        <span className="footer__lineText2">© 2021 Amazon clone</span>
        <span className="footer__seperator" />
        <a href="https://github.com/ceylon85/react-amazon-clone">
          <img
            className="git__logo"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="git"
            title="클릭하시면 github로 이동합니다"
          />
        </a>
      </div>
    </div>
  );
}

export default FooterLine;
