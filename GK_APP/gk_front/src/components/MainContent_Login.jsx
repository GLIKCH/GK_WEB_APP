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
                
                <form id="l_id_form" action="/login">
                <ol>
                <li><label htmlFor="emaillabel">Email</label>
                <input id="l_id_email1" name="emaillabel" type="email"/>
                </li>

                <li><label htmlFor="passlabel">Password</label>
                <input id="l_id_pass1" name="passlabel" type="password"/>
                </li>

                <input type="submit" name="Submit" value="Agent Login" class="buttonSubmit" />
                </ol>
                </form>
              </div>
        </div>
    );
    }
}

// Default Export Method for Component
export default MainLogin;