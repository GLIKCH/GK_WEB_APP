// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

// Component Imports
import GKHome from './pages/GK_HOME';
import gkLogin from './pages/GK_LOGIN';
import gkProducts from './pages/GK_Products';
import gkForum from './pages/GK_FORUM';
import gkResearch from "./pages/GK_RESEARCH";
import gkNews from "./pages/GK_NEWS";
import gkContact from './pages/GK_CONTACT';

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
            <GKHome />
          </Route>
          <Route path="/products">
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
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }

// Default Export Method for Component
export default App;