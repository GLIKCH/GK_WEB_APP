// Main JSX React imports
import React from 'react';

// Routing Imports
// Component Imports
import GK_LOGIN from '../components/MainContent_Login';
import GK_LOGIN_LOGO from '../components/logos/L.Logo';

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports
import GKVideo from '../videos/GK_BG06.mp4';

// JSX Component and Return

const Login = () => {
    
    return(
        <div className="Login">
        <video id="l_id_video" autoPlay playsinline loop muted>
        <source src={GKVideo} type="video/mp4" />
        </video>
        <GK_LOGIN_LOGO id="l_id_logo"/>
        <GK_LOGIN href="/" id="l_id_content" />
        </div>
    );
}

// Default Export Method for Component
export default Login;