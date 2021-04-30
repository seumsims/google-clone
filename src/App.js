import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      
    
      <h1>
     SEUM SALAMOON ALAIKOOM SALAMOON SALAMOON
     </h1>
     <Switch>
        <Route path='/'> <Home/> </Route>
      </Switch>
      <Switch>
        <Route path='/search'> <h1> SALAM From Search Page </h1> </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
