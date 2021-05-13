import React from "react";
import './App.css';
import Header from "./header/Header";
import Home from "./home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Login from "./login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Login Page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Checkout Page */}
          <Route path="/checkout">
            {/* Header */}
            <Header />
            <Checkout />
          </Route>
          
          {/* Main Page */}
          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
