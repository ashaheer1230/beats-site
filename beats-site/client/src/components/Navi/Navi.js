import React, {useState} from 'react';
import { Pages } from './Pages'
import './Navi.css'

import {
    Button
  } from '@material-ui/core/';

//class Navi extends React.Component {

    
    export default function Navi(props) {

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

        /*
         <nav className="NavbarItems">
                <h1 className="navbar-logo">SHERU<i className="fas fa-record-vinyl"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {Pages.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                </ul>
            </nav>
        */


        return (
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
        );
    

    }

    


    /*state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }*/

    //render() {
        
    //}
//}

//export default Navi
