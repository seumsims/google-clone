import React from "react";
import "./App.css";
import Home from "./pages/Home";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
      <h1>
     SEUM SALAMOON ALAIKOOM SALAMOON SALAMOON
     </h1>
      </div>
    <Router>
    <Link to="/test">Test</Link>
      <Switch>
        <Route path="/">
           <Home /> 
        </Route>
      
        <Route path="/search"> 
        <h1> SALAM From Search Page </h1> 
        </Route>

        <Route path="/test"> 
        <h1> SALAM From Search Page </h1> 
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
