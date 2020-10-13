// Default React Import
import React from 'react';

// Routing Imports
import { A } from 'hookrouter';

// Styling Imports
import '../scss/GK_COMPONENTS.scss';

// Imamge Imports
import PRD01 from '../images/PRD01.png';
import COM01 from '../images/COM01.png';
import RES01 from '../images/RES01.png';
import ABT01 from '../images/ABT01.png';

// JSX Constant Render
export const GK_NAV = () => {
    return (
        <div id="GK-NM01">
                <A id="GK_NAV_1" href="/products"><img id="GKN-LINK" alt="PRD01" src={PRD01} /></A>
                <A id="GK_NAV_2" href="/community"><img id="GKN-LINK" alt="CON01" src={COM01} /></A>
                <A id="GK_NAV_3" href="/research"><img id="GKN-LINK" alt="RES01" src={RES01} /></A>
                <A id="GK_NAV_4" href="/about"><img id="GKN-LINK" alt="ABT01" src={ABT01} /></A>
        </div>
    )
}

export default GK_NAV;

// Abreviations
// GK-NM01 - main content nav