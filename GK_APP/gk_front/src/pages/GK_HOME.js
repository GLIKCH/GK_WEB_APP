// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, } from 'react-router-dom';

// Component Imports
import GKVideo from '../videos/GK_BG04.mp4';
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import Featured from '../components/content/Featured';

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports

// JSX Component and Return

const Home = () => {
    return(
        <div className="h-home">
            {/* Background Video */}
            <video id="h_id_video" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video>

            {/* Main Header Component */}
            <MainHeader id="h_id_header" />

            {/* Main Content Window */}
            <div id="id_content">
            <Featured id="h_id_featured" />
            </div>
        </div>
    );
}

// Default Export Method for Component
export default Home;
