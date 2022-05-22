import React, {useState} from 'react';
import './App.css';
import { Button } from './Button.js';
import { Pages } from './Pages';
import musicImg from './imgmain.png';


export default function About (props) {

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

                <div className="column-rightAbout">

                    <div className="row">

                        <div className="columnImg">
                            <img src={musicImg} alt="Cant display" className="aboutImg">
                            </img>

                            <div className="emptySpaceAbout"/>

                        </div>

                        <div className="columnInfo">

                                <br/>
                                <p className="personalTextHeading">Sheru</p>
                                <br/>
                                <hr className="hr-line"></hr>
                                <br/>
                                <h3 className="personalText">Toronto</h3>
                                <h3 className="personalText">21</h3>

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <h3 className="personalText">All beats listed are free to use</h3>
                                <br/>
                                <hr className="hr-line2"></hr>
                                <br/>
                                <h3 className="personalText">prodsheru@gmail.com</h3>
                                <br/>

                                <div className="emptySpaceAbout"> </div>

                        </div>

                    </div>
                </div>
                
            </div>



            </div>
        )
    
}