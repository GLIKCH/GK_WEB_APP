// Main JSX React imports
import React from 'react';

// Routing Imports
// import { BrowserRouter as Router, } from 'react-router-dom';

// Component Imports
import GKVideo from '../videos/GK_BG02.mp4';

// import Featured from '../components/content/FeaturedContent';

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports
import Logo from '../Images/Variations/GKL_NEON01.png';
import Term01 from '../Images/term01.png';

// JSX Component and Return

const Home = () => {
    console.log(Logo);

    return(
        <body>
 
            {/* Background Video */}
            <video id="homeVideo" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video> 

            

            <div class="block1"></div>

            <div class="Header">

            {/* Navigation Left */}
            <ul id="navl">
            <li id="gknav"><a href="/intro">Home</a></li>
            <li id="gknav"><a href="/shop">Shop</a></li>
            <li id="gknav"><a href="/groups">Groups</a></li>
            </ul>

            {/* Navigation Logo Middle */}
            <a href="/intro"><img href="/home" id="homeLogo" src={Logo} alt="logo"></img></a>
            
            {/* Navigation Right */}
            <ul id="navr">
            <li id="gknav"><a href="/code">Code</a></li>
            <li id="gknav"><a href="/portfolio">News</a></li>
            <li id="gknav"><a href="/contact">Contact</a></li>
            </ul>

            </div>
            <div class="block3"></div>
            <div class="block4">
            </div>
            <div class="block5">
            <ul class="gksidenav">
            <li id="sidelink"><a href="/gknews">Profile</a></li>
            <li id="sidelink"><a href="/gkresources">Resources</a></li>
            <li id="sidelink"><a href="/gkresearch">Cheats</a></li>
            <li id="sidelink"><a href="/gknews">News</a></li>
            </ul>
            <div id="content5">
            <img id="term1" src={Term01}></img>
            <h1>Under Construction...</h1>
            </div>
            </div>
            <div class="block6"></div>


            {/* Main Header Component */}


            {/* Main Content Window */}

            {/* Featured Shop Images Component */}
            {/* <Featured id="h_id_featured" /> */}
            
        </body>
    );
}

// Default Export Method for Component
export default Home;
