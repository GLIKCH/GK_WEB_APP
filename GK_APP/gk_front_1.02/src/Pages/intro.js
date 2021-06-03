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
import Logo from '../Images/GKLOGO03_01.png';

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
            <div class="block2">
            <ul id="ul1">
            <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/groups">Groups</a></li>
            </ul>
            <a href="/intro"><img href="/home" id="homeLogo" src={Logo} alt="logo"></img></a>
            <ul id="ul2">
            <li><a href="/code">Code</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
            <div class="block3"></div>
            <div class="block4"></div>
            <div class="block5">
            <div id="content5">.</div>
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
