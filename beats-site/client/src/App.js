import React, {useState, useEffect} from 'react';
import './App.css';
import './Navi.css';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.png';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
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
    img5,
    img6
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
  
      const sorted = tempBeats.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
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

        <div className="column-right">
          {allBeats.map((val) => {
          
            return (
              <div className="beatCard">

                <div flex={1}>
                  <img src={imgArray[Math.floor(Math.random()*imgArray.length)]} alt="Cant display" className="cardImg">
                  </img>
                </div>

                <div className="cardContent" flex={1}>

                  <h2 className="cardTextTitle">{val.Name}</h2>
                  <h5 className="cardText">{val.Tempo}bpm</h5>
                  <h5 className="cardText">{val.Key} {val.Scale}</h5>

                  <audio className="audioSlider" key={val.Name} controls controlsList="nodownload">
                    <source src={"https://docs.google.com/uc?export=download&id=" + val.Path} type="audio/mpeg"></source>
                    <source src={"https://docs.google.com/uc?export=download&id=" + val.Path} type="audio/wav"></source>
                    <source src={"https://docs.google.com/uc?export=download&id=" + val.Path} type="audio/ogg"></source>
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
