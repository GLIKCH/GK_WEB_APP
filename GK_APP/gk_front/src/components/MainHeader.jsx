// Main JSX React imports
import React from 'react';

// Routing Imports
// Component Imports

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
           imgSrc: GKL01
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
            {/* Logo IMG Section */}
            <img src={this.state.imgSrc} alt="Main-Logo" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
        </div>
    );
    }
}

// Default Export Method for Component
export default MainHeader;