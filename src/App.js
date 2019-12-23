import React from "react";
import "./App.css";
import HomePage from "./containers/homepage/HomePage";
import ShopPage from "./containers/shop/ShopPage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
