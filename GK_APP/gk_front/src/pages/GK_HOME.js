// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Link } from 'react-router-dom';
// Component Imports
import GKHeader from '../components/MainHeader';
import GKVideo from '../videos/GK_BG02.mp4';
import GKLOGO from '../images/GKLOGO03.png'

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports

// JSX Component and Return

const Home = () => {
    return(
        <div className="H-Home">
            {/* Background Video*/}
            <video className="H-Video" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video>
            <img src={GKLOGO} className="H-Logo" />
        </div>
    );
}

// Default Export Method for Component
export default Home;
