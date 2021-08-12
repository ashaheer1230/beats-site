import React, {useState, useEffect} from 'react';
import './Navi.css';
import './App.css';
import Axios from 'axios';
import musicImg from './musicImg.jpg';
import { Button } from './Button.js';
import { Pages } from './Pages';

//const Spacer = require('react-spacer');

function App(props) {

  const [allBeats, setAllBeats] = useState([]);
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

  //Variables used to manually input music to DB
  /*const [filename, setfilename] = useState("Waves");
  const [tempo, setTempo] = useState(137);
  const [key, setKey] = useState('E');
  const [scale, setScale] = useState('Minor');
  const [tempFile, setTempFile] = useState('1KCYiJMSK4TW8X8-1jmp6nu8OkAzwzoq_');*/
  
  useEffect(() => {

    Axios.get("http://localhost:3001/api/get").then((response) => {
      setAllBeats(response.data);
    })

  }, []);

  /*useEffect(() => {

    Axios.post("http://localhost:3001/api/upload", {
      Name: filename,
      Tempo: parseInt(tempo),
      Key: key,
      Scale: scale,
      tempFile: tempFile,
    });

  }, [filename, tempo, key, scale, tempFile]);*/

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
          {allBeats.map((val) => {
          
            return (
              <div className="beatCard">

                <div flex={1}>
                  <img src={musicImg} alt="Cant display" className="cardImg">
                  </img>
                </div>

                <div flex={1}>

                  <h2 className="cardTextTitle">{val.Name}</h2>
                  <h5 className="cardText">{val.Tempo}bpm</h5>
                  <h5 className="cardText">{val.Key} {val.Scale}</h5>

                  <audio className="audioSlider" key={val.Name} controls controlsList="nodownload">
                    <source src={"https://docs.google.com/uc?export=download&id=" + val.musicFile} type="audio/mpeg"></source>
                    <source src={"https://docs.google.com/uc?export=download&id=" + val.musicFile} type="audio/wav"></source>
                    <source src={"https://docs.google.com/uc?export=download&id=" + val.musicFile} type="audio/ogg"></source>
                    <p>Your browser does not support audio playback</p>
                  </audio>
                  
                </div>
                
              </div>
          )})}


        </div>
        
      </div>
      
    </div>
  );
}

export default App;
