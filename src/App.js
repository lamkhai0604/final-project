import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import BookTable from "./Pages/BookTable";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/Sign-in" component={Signin} />
        <Route path="/Sign-up" component={Signup} />
        <Route path="/Book-table" component={BookTable} />
      </Switch>
    </div>
  );
}

export default App;
