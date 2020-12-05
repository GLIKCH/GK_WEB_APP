// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Component Imports
// import HomeContent from './Children Components/HomeContent';

// SCSS Imports
import '../scss/Components.scss';

// Video / Image Imports
import Display1 from "../images/Sample2Test.png";
import GK_SP02 from '../images/Promotional/shop1.png'
import GK_SP01 from '../images/Promotional/shop2.png'


// JSX Component and Return
export class MainContent extends React.Component{

    render(){
    return(
        <div className="MainContent">
        <div id="m_id_c1box">
        {/* <HomeContent /> */}
        </div>
        </div>
    );
    }
}

// Default Export Method for Component
export default MainContent;