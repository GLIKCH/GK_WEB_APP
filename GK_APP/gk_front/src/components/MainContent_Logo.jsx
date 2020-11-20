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

export class MainLogin extends React.Component{

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
        <div className="MainLogin">
            {/* Logo IMG Section */}
            <div id="l_id_content">
                <a href="/">
                <img id="l_id_logo"
                 src={this.state.logoImg} 
                 alt="Main-Logo" 
                 onMouseOver={this.handleMouseOver} 
                 onMouseOut={this.handleMouseOut} />
                </a>
                <div id="input-container">
                </div>
              </div>
        </div>
    );
    }
}

// Default Export Method for Component
export default MainLogin;