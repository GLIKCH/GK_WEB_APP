// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, } from 'react-router-dom';

// Component Imports
import GKVideo from '../videos/GK_BG11.mp4';
import NewsHeader from '../components/headers/NewsHeader';


// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports

// JSX Component and Return

const Home = () => {
    return(
        <div className="h-home">
            {/* Background Video*/}
            <video id="h_id_video" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video>
            <NewsHeader id="h_id_header" />
            <div id="id_content_news"></div>
        </div>
    );
}

// Default Export Method for Component
export default Home;
