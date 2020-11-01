// Default React Import
import React from 'react';

// Styling SCSS Imports
import './scss/GK_App.scss';

// Component Imports
import GK_HOME from './pages/GK_HOME';

function App() {
  return (
    <div className="App">
       <GK_HOME />
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
// GK-IG01 = main content Image