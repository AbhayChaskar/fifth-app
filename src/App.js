import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallary from "./components/Gallary";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/gallary" exact component={Gallary}/>
        <Route path="/contact" exact component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
     
    </>
  );
}

export default App;
