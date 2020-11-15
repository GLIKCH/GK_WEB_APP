// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Component Imports
import GK_HOME from './pages/GK_HOME';
import GK_LOGIN from './pages/GK_LOGIN';
import GK_SHOP from './pages/GK_SHOP';
import GK_BLOG from './pages/GK_BLOG';
import GK_CONTACT from './pages/GK_CONTACT';

// SCSS Imports
import './scss/App.scss';

// Image Imports


// JSX Component and Return
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GK_HOME />
          </Route>
          <Route path="/products">
            <GK_SHOP />
          </Route>
          <Route path="/blog">
            <GK_BLOG />
          </Route>
          <Route path="/contact">
            <GK_CONTACT />
          </Route>
          <Route path="/login">
            <GK_LOGIN />
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }

// Default Export Method for Component
export default App;
