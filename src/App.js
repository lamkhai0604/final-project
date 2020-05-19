import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Login from "./Pages/Login";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
    
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route path="/login" render={() => <Login />}/>
        

      </Switch>
      
    </div>
  );
}

export default App;
