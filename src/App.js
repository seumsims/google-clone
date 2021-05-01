import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
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
          
    <Route path="/search">
            <SearchPage />
            </Route>
            <Route path="/test">
            <h1>
              SALAM From Test Page
            </h1>
            </Route>
          <Route path="/">
            <Home />
          </Route>

          

         
        </Switch>
    </Router>
    </div>
  );
}

export default App;
