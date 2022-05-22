import React, {useState} from 'react';
import './App.css';
import { Button } from './Button.js';
import { Pages } from './Pages';
import igLogo from './iglogo.png';
import mailLogo from './mailimg.png';
import {
    Snackbar
  } from '@material-ui/core';


export default function Contact (props) {

    const [clicked, setClicked] = useState(false);
    const [igClick, setIgClick] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    }

    const handleMailClick = () => {
        window.open("https://mail.google.com/mail/u/0/?fs=1&to=prodsheru@gmail.com&tf=cm");
    }
    const handleIgClick = () => {
        //setIgClick(true);
        window.open("https://instagram.com/ayosheru?utm_medium=copy_link");
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
                    <div className="filterSectionApp">
                        <br></br>

                        <h1 className="aboutTitles">5 Sounds 5 Beats</h1>

                        <br></br>
                        <hr></hr>
                        <br></br>
                        <br></br>

                        <h4 className="aboutHeadings">All beats listed are free to use</h4>
                        <br></br>
                        <h4 className="aboutHeadings">Contact for stems, wavs, and mp3s</h4>

                        <br></br>
                        <br/>
                        <br/>

                        <hr></hr>
                        <br/>

                        <h2 className="aboutTitles">Exclusive Beats</h2>
                        <br></br>
                        <hr></hr>
                        <br/>
                        <h4 className="aboutHeadings">Contact for Exclusive Beats</h4>
                        <br/>
                        <h4 className="aboutHeadings">prodsheru@gmail.com</h4>
 
                      </div>

                </div>

                <div className="column-rightContact">
                    
                    <h1 className="personalTextHeading">Contact for Inquiries</h1>
                    <br/>
                    <h1 className="contactPrompt">(Press below to contact)</h1>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="contactImgDiv">
                    
                    <img src={mailLogo} alt="prodsheru@gmail.com" className="contactImg" onClick={() => handleMailClick()}></img>
                    <img src={igLogo} alt="ayosheru" className="contactImg" onClick={() => handleIgClick()}></img>
                    </div>
                    
                    
                </div>
                
            </div>

                {igClick && (
                    <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={igClick}
                    autoHideDuration={3000}
                    onClose={() => setIgClick(false)}
                    message={'Coming Soon ;)'}
                    />
                )}

            </div>
        )
    
}