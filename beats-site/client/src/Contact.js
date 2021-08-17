import React, {useState} from 'react';
import './App.css';
import { Button } from './Button.js';
import { Pages } from './Pages';
import igLogo from './iglogo.png';
import mailLogo from './mailimg.png';
import beatstars from './beatstars.jpeg';


export default function Contact (props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    }
  
    const switchPage = (index) => {
      if (index === 0){
  
          props.history.push(`/`);
          window.location.reload(false);
  
      } else if ( index === 1) {
          
          props.history.push(`/about`);
          window.location.reload(false);
  
      } else {
  
          props.history.push(`/contact`);
          window.location.reload(false);
  
      }
    }

    
        return (

            <div className="App">
                <div>
                    <nav className="NavbarItems">
                        <h1 className="navbar-logo">SHERU<i className="fas fa-record-vinyl"></i></h1>
                        <div className="menu-icon" onClick={() => handleClick()}>
                            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                                {Pages.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Button className={item.cName} onClick={() => switchPage(index)}>
                                            {item.title}
                                            </Button>
                                        </li>
                                    )
                                })}
                        </ul>
                    </nav>
                </div>

            <div className="row">

                <div className="column-left">
                    <div className="filterSection">
                            <br></br>

                            <h1 className="aboutTitles">newTorontoMusic</h1>

                            <br></br>
                            <br></br>

                            <h4 className="aboutHeadings">newTorontoMusic is a production group aiming to shape the sound of the next generation of Toronto music.</h4>

                            <br></br>
                            <br/>

                            <br/>


                            <h2 className="aboutTitles">Producers: </h2>
                            <br></br>
                            <h4 className="aboutHeadings"> (Coming Soon) </h4>

                    </div>
                </div>

                <div className="column-rightContact">
                    
                    <h1 className="personalTextHeading">Contact for Inquiries/Pricing</h1>
                    <br/>
                    <h1 className="contactPrompt">(Press below to contact)</h1>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="contactImgDiv">
                    <img src={mailLogo} alt="prodsheru@gmail.com" className="contactImg"></img>
                    <img src={igLogo} alt="Coming Soon" className="contactImg"></img>
                    </div>
                    
                    
                </div>
                
            </div>



            </div>
        )
    
}