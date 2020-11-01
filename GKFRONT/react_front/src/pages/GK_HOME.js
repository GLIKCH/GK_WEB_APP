  
// Default React Import
import React from 'react';

// Routing Imports
import { A } from 'hookrouter';

// Image Imports
import GKL01 from '../images/GKLOGO03.png';
import GKL02 from '../images/GKLOGO03_HOVER03.png';
import GKFT01 from '../images/footer01.png'
import TERM01 from '../images/GKUSER.ico'

// Styling Imports
import '../scss/GK_Home.scss';

// JSX Constant Render
class GK_HOME extends React.Component {

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
        <div className="GK_HOME">
           <div className="GK_HEAD">
                     <div className="GK_LOGO">
                      <A href="/"><img id="GK_LOGO" alt="alt" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/></A>
                      </div>
                     <nav className="GK_NAV">
                       <A id="LINK1" href="/products">Products</A>
                       <A id="LINK2" href="/community">CommunitY</A>
                       <A id="LINK3" href="/research">ResearcH</A>
                       <A id="LINK4" href="/about">AbouT</A>
                     </nav>
                     <div className="GK_CART">
                     <img id="GK_TERM" alt="alt" src={TERM01}/>
                     <A id="LINK5" href="/login">Login</A>
                     </div>
                 </div>
                 
                 <section id="dir_view">5</section>
                 <section id="adds_view">
                 <section className="banner_view">4</section>
                   </section>
                 <section id="com_view">6</section>
                 <main className="GK_SHOP">
                   <div className="store_item">1</div>
                   <div className="store_item">2</div>
                   <div className="store_item">3</div>
                   <div className="store_item">4</div>
                   <div className="store_item">5</div>
                   <div className="store_item">6</div>
                   <div className="store_item">7</div>
                   <div className="store_item">8</div>
                   </main>
         </div>
    );}}

export default GK_HOME;