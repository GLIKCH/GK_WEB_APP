// Main JSX React imports
import React from 'react';

// Routing Imports
// Component Imports
import gkLogin from '../components/login/MainContent_Login';
import gkLoginLogo from '../components/special/L.Logo';

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
        <gkLoginLogo id="l_id_logo"/>
        <gkLogin href="/" id="l_id_content" />
        </div>
    );
}

// Default Export Method for Component
export default Login;