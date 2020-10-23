// Default React Import
import React from 'react';

// Routing Imports
import { A } from 'hookrouter';

// Image Imports
import GKL01 from '../images/GKLOGO03.png';
import GKL02 from '../images/GKLOGO03_HOVER03.png';

// Styling Imports
import '../scss/GK_COMP.scss';

// JSX Constant Render
class GK_LOGO extends React.Component {

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

    render() {
    return (
        <div id="GK-LD01">
             <A href="/"><img id="GK-LD01" alt="alt" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/></A>
        </div>
    )
}
}

export default GK_LOGO;

// GK-LI01 - main logo image