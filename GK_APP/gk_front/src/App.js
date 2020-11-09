// Important Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Routing Imports
import { useRoutes, A } from 'Hookrouter';
import routes from './router';

// Image Imports
import logo from './logo.svg';

// SCSS Imports
import './App.css';

// Main App Funciton
function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <header className="App-header">
        <A href="/">Test Link</A>
      </header>
    </div>
  );
}

export default App;
