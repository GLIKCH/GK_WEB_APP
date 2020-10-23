// Default React Import
import React from 'react';

// Routing Imports
import { A } from 'hookrouter';

// Styling Imports
import '../scss/GK_COMP.scss';


// JSX Constant Render
export const GK_NAV = () => {
    return (
        <div id="GK-NM01">
                <A id="LINK1" href="/products">Products</A>
                <A id="LINK2" href="/community">CommunitY</A>
                <A id="LINK3" href="/research">ResearcH</A>
                <A id="LINK4" href="/about">AbouT</A>
        </div>
    )
}

export default GK_NAV;

// Abreviations
// GK-NM01 - main nav menu