// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Link } from 'react-router-dom';
// Component Imports
import GKHeader from '../components/MainHeader';
import GKVideo from '../videos/GK_BG04.mp4';
import GKLOGO from '../images/GKLOGO03.png'
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports

// JSX Component and Return

const Home = () => {
    return(
        <div className="H-Home">
            {/* Background Video*/}
            <video className="h_id_video" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video>
            <MainHeader className="h_id_header" />
            <MainContent className="h_id_content" />
        </div>
    );
}

// Default Export Method for Component
export default Home;
