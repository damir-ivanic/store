import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./containers/homepage/HomePage";
import ShopPage from "./containers/shop/ShopPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import SingInSignUp from "./containers/sign-in-sign-up/SingInSignUp";
import { auth } from "./firebase/firebase-utils"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));
    console.log(currentUser)
    return () => {
      unsubscribe();
    }
  })

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
