// Default React Import
import React from 'react';

// Routing Imports
// import { A } from 'hookrouter';

// Styling Imports
import '../scss/GK_COMPONENTS.scss';

// Image Imports
import GK_LG_001 from '../images/GKLOGO03.png';

// JSX Constant Render
export const GK_LOGO = () => {
    return (
        <div id="GK-IC01">
            <img src={GK_LG_001} alt="GK-IG01" id="GK-IG01" />
        </div>
    )
}

export default GK_LOGO;