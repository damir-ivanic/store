import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => <div>HATS PAGE</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
