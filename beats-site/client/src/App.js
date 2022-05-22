import React, {useState, useEffect} from 'react';
import './App.css';
import './Navi.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.png';
import beat1 from './Audio/distance.mp3'
import beat2 from './Audio/wild.mp3'
import beat4 from './Audio/noise.wav'
import beat3 from './Audio/ot.wav'
import beat5 from './Audio/fresh.wav'
import beat6 from './Audio/glass.wav'
import { Button } from './Button.js';
import { Pages } from './Pages';

    var Parse = require('parse/node');
    Parse.initialize("coCYo2bMg7Z52LoGnNFsZ7pautR5bKpQRGZNVman", "vx1iqHfNGOdVi3DBE1lf4iRk8pVt845pzPvPrMt7"); 
    Parse.serverURL = "https://parseapi.back4app.com/";

    

//const Spacer = require('react-spacer');

function App(props) {

  const [allBeats, setAllBeats] = useState([]);
  const [clicked, setClicked] = useState(false);

  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]

  const beatArray = [
    beat1,
    beat2,
    beat3,
    beat4,
    beat5,
    beat6
  ]

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

    async function retrieveBeats() {

      const Beat = new Parse.Query("Beat");
      const tempBeats = [];
  
      const results = await Beat.find();
  
      try {
        for (const object of results) {
          tempBeats.push(object.attributes);
        }
      } catch (error) {
        console.log("ERROR while fetching 'Beats'" + error);
      }
  
      const sorted = tempBeats.sort((a, b) => new Date(a.beatNum) - new Date(b.beatNum));
  
        setAllBeats(sorted);
  
    }

    retrieveBeats();

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
    <div className="App" id={1}>
      
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

        <div className="column-right">
          {allBeats.map((val) => {
          
            return (
              <div className="beatCard" key={val.Name}>

                <div flex={1}>
                  <img src={imgArray[val.Img - 1]} alt="Cant display" className="cardImg">
                  </img>
                </div>

                <div className="cardContent" flex={1}>

                  <h2 className="cardTextTitle">{val.Name}</h2>
                  <h5 className="cardText">{val.Tempo}bpm</h5>
                  <h5 className="cardText">{val.Key} {val.Scale}</h5>

                  <audio className="audioSlider" key={val.Name} controls controlsList="nodownload">
                    <source src={beatArray[val.beatNum - 1]} type="audio/mpeg"></source>
                    <source src={beatArray[val.beatNum - 1]} type="audio/wav"></source>
                    <source src={beatArray[val.beatNum - 1]} type="audio/ogg"></source>
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
