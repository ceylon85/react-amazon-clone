import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home_Product/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login';
import Footer from './Footer/Footer';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IWdlsJdM5qUOUeUrgjHuAAyuRkPygf1JZ477y0gmKtmKz22fccJn9OAvLEEJZx5wVU6FreHZ8pjknr1luNtv94i00tQoDPvRj"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //component가 loads 될 때 한 번만 실행
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("The user is ==>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //모든 정리작업이 여기에..
      unsubscribe();
    };
  }, [dispatch]);

  console.log("User is>>>>>>", user);

  return (
    <Router>

    <div className="App">
    <Switch>
          {/* default route */}
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer /> 
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
