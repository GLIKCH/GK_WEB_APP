// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Component Imports

// SCSS Imports
import '../scss/Components.scss';

// Video / Image Imports
import Display1 from "../images/Sample2Test.png";

// JSX Component and Return
export class MainContent extends React.Component{

    render(){
    return(
        <div className="MainContent">
            <a href=""><img id="display1" src={Display1} alt="cyber"></img></a>
        </div>
    );
    }
}

// Default Export Method for Component
export default MainContent;