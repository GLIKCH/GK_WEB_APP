// Main JSX React imports
import React from 'react';

// Routing Imports
// Component Imports
import GK_LOGO from '../components/MainContent_Logo';

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports
import GKVideo from '../videos/GK_BG01.mp4';

// JSX Component and Return

const Login = () => {
    
    return(
        <div className="Login">
        <video id="l_id_video" autoPlay playsinline loop muted>
        <source src={GKVideo} type="video/mp4" />
        </video>
        <GK_LOGO href="/" id="l_id_logo" />
        </div>
    );
}

// Default Export Method for Component
export default Login;