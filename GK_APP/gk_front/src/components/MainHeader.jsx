// Main JSX React imports
import React from 'react';

// Routing Imports
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Component Imports
import GK_SHOP from '../pages/GK_SHOP';

// SCSS Imports
import '../scss/Components.scss';

// Video / Image Imports
import GKL01 from '../images/GKLOGO03.png';
import GKL02 from '../images/GKLOGO03_HOVER03.png';

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
          imgSrc: GKL02
        });
      }
    
      handleMouseOut() {
        this.setState({
          imgSrc: GKL01
        });
      }

    render(){
    return(
        <div className="MainHeader">
          <Router>
            {/* Logo IMG Section */}
            <div id="id_logo_box">
              <img id="id_logo" 
                 src={this.state.logoImg} 
                 alt="Main-Logo" 
                 onMouseOver={this.handleMouseOver} 
                 onMouseOut={this.handleMouseOut} />
            </div>
            <div id="id_nav">
                <Link to="/products">Products</Link>
                <Link to="/community">Community</Link>
                <Link to="/research">Research</Link>
                <Link to="/technews">News</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div id="id_shop"></div>
          </Router>
        </div>
    );
    }
}

// Default Export Method for Component
export default MainHeader;