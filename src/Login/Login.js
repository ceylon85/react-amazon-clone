import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import LoginFooter from "./LoginFooter";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    // login 버튼을 눌렀을 때 페이지 refresh 방지
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login을 하게되면 homepage로 이동
        history.push("/");
        console.log("login=>", auth);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //회원가입을 하고 로그인하면 homepage로 이동
        history.push("/");
        console.log("createUser =>", auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="login"
          />
        </Link>
        <div className="login__container">
          <h1>Sign-In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={login}
              type="submit"
              className="login__signInButton"
            >
              Continue
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
              alt="이용약관"
            >
              Conditions of Use
            </a>{" "}
            and {""}
            <a
              href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
              alt="개인정보 보호정책"
            >
              Privacy Notice
            </a>.
          </p>

          <div className="login__divider">
            <h5>New to Amazon?</h5>
          </div>
          <div className="login__subsection">
            <button onClick={register} className="login__registerButton ">
              Create your Amazon Account
            </button>
          </div>
        </div>
      </div>
      <LoginFooter />
    </div>
  );
}

export default Login;
