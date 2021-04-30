import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>
     SEUM SALAMOON ALAIKOOM SALAMOON SALAMOON
     </h1>
     <Home/>
    </div>
    </Router>
  );
}

export default App;
