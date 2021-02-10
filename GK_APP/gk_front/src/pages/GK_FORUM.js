// Main JSX React imports
import React from 'react';

// Routing Imports

// Component Imports
import GKVideo from '../videos/GK_BG05.mp4';
import BlogHeader from '../components/headers/BlogHeader'; 

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports
import ME from '../images/me.png';

// JSX Component and Return

const Forum = () => {
    return(
        <div className="h-home">
            {/* Background Video*/}
            <video id="h_id_video" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video>
            <BlogHeader id="h_id_header" />
            <div id="id_content_blog">
            </div>
        </div>
    );
}

// Default Export Method for Component
export default Forum;
