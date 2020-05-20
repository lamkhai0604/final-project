import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/Sign-in" component={Signin} />
        <Route path="/signup" render={() => <Signup />} />
      </Switch>
  
    </div>
  );
}

export default App;
