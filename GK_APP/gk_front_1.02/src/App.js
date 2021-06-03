// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Component Imports
import GKIntro from './Pages/intro';


// SCSS Imports
import './scss/App.scss';

// Image Imports

// JSX Component and Return
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/intro">
            <GKIntro />
          </Route>
          {/* <Route path="/products">
            <gkProducts />
          </Route>
          <Route path="/forum">
            <gkForum />
          </Route>
          <Route path="/research">
            <gkResearch />
          </Route>
          <Route path="/news">
            <gkNews />
          </Route>
          <Route path="/contact">
            <gkContact />
          </Route>
          <Route path="/login">
            <gkLogin />
          </Route> */}
        </Switch>
      </Router>
    </div>
    );
  }

// Default Export Method for Component
export default App;