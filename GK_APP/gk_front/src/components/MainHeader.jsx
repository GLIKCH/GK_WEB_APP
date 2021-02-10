// Main JSX React imports
import React from 'react';

// Routing Imports

// Component Imports

// SCSS Imports
import '../scss/Components.scss';

// Video / Image Imports
import GKL01 from '../images/Variations/GKL_Primary.png';
import GKL02 from '../images/Variations/GKL_NEON01.png';

// JSX Component and Return

export class MainHeader extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           logoImg: GKL01
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
      }
    
      handleMouseOver() {
        this.setState({
          logoImg: GKL02
        });
      }
    
      handleMouseOut() {
        this.setState({
          logoImg: GKL01
        });
      }

    render(){
    return(
        <div className="MainHeader">
            {/* Logo IMG Section */}
            <div id="h_id_logo_box">
                <a href="/" ><img id="h_id_logo" 
                 src={this.state.logoImg} 
                 alt="Main-Logo" 
                 onMouseOver={this.handleMouseOver} 
                 onMouseOut={this.handleMouseOut} /></a>
            </div>
            <div id="h_id_nav">
                <a id="h_id_nav_link1" href="/products">Products</a>
                <a id="h_id_nav_link2" href="/forum">Forum</a>
                <a id="h_id_nav_link3" href="/research">Research</a>
                <a id="h_id_nav_link4" href="/news">News</a>
                <a id="h_id_nav_link5" href="/contact">Contact</a>
            </div>
            <div id="h_id_shop">
                <a id="h_id_shop_link1" href="/login">
                <div id="h_id_shop_box">
                  Login
                </div>
                </a>
            </div>
        </div>
    );
    }
}

// Default Export Method for Component
export default MainHeader;