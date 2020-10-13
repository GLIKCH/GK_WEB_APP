// Default React Import
import React from 'react';

// Styling SCSS Imports
import './App.scss';

// Image Imports


// Component Imports
import GK_NAV from './components/GK_NAV';
import GK_LOGO from './components/GK_LOGO';
import GK_CONT from './components/GK_CONTENT';

function App() {
  return (
    <div className="App">
        <header className="GK-CH01">
          <GK_LOGO className="GK-CL01"/>
          <GK_NAV className="GK-CN01" />
          <div className="GK-CC01"></div>
        </header>

        <GK_CONT className="GK-CT01" />
        </div>
  );
}

export default App;

// Div Class Names
// GK-CT01 = main content window
// GK-CH01 = main content header
// GK-CL01 = main content logo
// GK-CN01 = main content navbar
// GK-CC01 = main content cart

// -- Component GK_LOGO.jsx
// GK-IC01 = main content Image