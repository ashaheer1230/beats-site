import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { Button } from './Button.js';
import { Pages } from './Pages';


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
                    <div className="filterSection">
                        <br></br>

                        <h1>newTorontoMusic</h1>

                        <br></br>
                        <br></br>

                        <h4>newTorontoMusic is a production group aiming to shape the sound of the next generation of Toronto music.</h4>

                        <br></br>

                        <h2>Producers: </h2>
                        <br></br>
                        <h4> (Coming Soon) </h4>

                    </div>

                    <div className="emptySpace">

                    </div>
                </div>

                <div className="column-right">
                    

                    
                </div>
                
            </div>



            </div>
        )
    
}