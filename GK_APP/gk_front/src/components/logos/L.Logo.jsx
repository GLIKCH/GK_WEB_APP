// Main JSX React imports
import React from 'react';

// Routing Imports

// Component Imports

// SCSS Imports
import '../../scss/Components.scss';

// Video / Image Imports
import GKL01 from '../../images/Variations/GKSP06.png';
import GKL02 from '../../images/Variations/GKL_NEON01.png';

// JSX Component and Return

export class LoginLogo extends React.Component{

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
        <div className="L.Logo.Main">
            {/* Logo IMG Section */}
            <a href="/">
                <img id="loginlogo"
                 src={this.state.logoImg} 
                 alt="Main-Logo" 
                 onMouseOver={this.handleMouseOver} 
                 onMouseOut={this.handleMouseOut} />
                </a>
        </div>
    );
    }
}

// Default Export Method for Component
export default LoginLogo;