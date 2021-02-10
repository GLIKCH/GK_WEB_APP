// Main JSX React imports
import React from 'react';

// Routing Imports

// Component Imports

// SCSS Imports
import '../../images/me.png';

// Video / Image Imports
import GKL01 from '../../images/Variations/GK_DISABLED03.png';
import GKL02 from '../../images/Variations/GKSP03.png';

// JSX Component and Return

export class NewsHeader extends React.Component{

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
        <div className="BlogHeader">
            {/* Logo IMG Section */}
            <div id="bh_id_logo_box">
                <a href="/" ><img id="bh_id_logo" 
                 src={this.state.logoImg} 
                 alt="Main-Logo" 
                 onMouseOver={this.handleMouseOver} 
                 onMouseOut={this.handleMouseOut} /></a>
            </div>
            <div id="nh_id_nav">
                <a id="nh_id_nav_link1" href="/products">Products</a>
                <a id="nh_id_nav_link2" href="/forum">Forum</a>
                <a id="nh_id_nav_link3" href="/research">Research</a>
                <a id="nh_id_nav_link4" href="/news">News</a>
                <a id="nh_id_nav_link5" href="/contact">Contact</a>
            </div>
            <div id="nh_id_shop">
                <a id="nh_id_shop_link1" href="/login">
                <div id="nh_id_shop_box">
                  Login
                </div>
                </a>
            </div>
        </div>
    );
    }
}

// Default Export Method for Component
export default NewsHeader;