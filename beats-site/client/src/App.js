import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './Navi.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.png';
import equal from './equal.gif';
import beat1 from './Audio/distance.mp3'
import beat2 from './Audio/wild.mp3'
import beat4 from './Audio/noise.wav'
import beat3 from './Audio/ot.wav'
import beat5 from './Audio/fresh.wav'
import beat6 from './Audio/glass.wav'
import { Button } from './Button.js';
import { Pages } from './Pages';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import { Howl, Howler } from 'howler';

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

  /*  
    TODO: 
      set this value programatically, 
      potentially during API call when retrieving beats.
  */
  const TOTAL_BEATS = 6;
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState(0);

  let sound = new Howl({
    src: [beatArray],
    onload: () => {
      soundRef.current.play();
    },
    onplay: () => {
      setIsPlaying(true);
    },
    onpause: () => {
      setIsPlaying(false);
    },
    onpos: () => {
      console.log(soundRef.current.seek());
    }
  });

  let soundRef = useRef(sound);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const switchPage = (index) => {
    if (index === 0) {

      props.history.push(`/`);
      window.location.reload(false);

    } else if (index === 1) {

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

  // function which loads a song from 'beatArray' based on the index passed
  // also unloads any song playing before loading the next.
  function loadSong(index) {
    setSelectedBeat(index);
    soundRef.current.unload();
    soundRef.current = new Howl({
      src: [beatArray[index - 1]],
      onload: () => {
        soundRef.current.play();
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      }
    });
  }

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
            <br />
            <br />

            <hr></hr>
            <br />

            <h2 className="aboutTitles">Exclusive Beats</h2>
            <br></br>
            <hr></hr>
            <br />
            <h4 className="aboutHeadings">Contact for Exclusive Beats</h4>
            <br />
            <h4 className="aboutHeadings">prodsheru@gmail.com</h4>

          </div>


        </div>

        <div className="column-right">
          {allBeats.map((val) => {

            return (
              <div className="beatCard" key={val.Name}>

                <div flex={1}>
                  {selectedBeat === val.beatNum ? <img src={equal} alt="audio equalizer" className="cardImg" /> : <img src={imgArray[val.Img - 1]} alt="Cant display" className="cardImg" onClick={() => { loadSong(val.beatNum) }} />}
                </div>

                <div className="cardContent" flex={1}>
                  <h2 className={selectedBeat === val.beatNum ? "cardTextTitle cardTextTitle-active" : "cardTextTitle"} onClick={() => { loadSong(val.beatNum) }}>{val.Name}</h2>
                  <h5 className="cardText">{val.Tempo}bpm</h5>
                  <h5 className="cardText">{val.Key} {val.Scale}</h5>
                </div>

              </div>
            )
          })}
        </div>

        <AudioPlayer
          soundRef={soundRef}
          TOTAL_BEATS={TOTAL_BEATS}
          selectedBeat={selectedBeat}
          loadSong={loadSong}
          isPlaying={isPlaying}
        />

      </div>
    </div>
  );
}

export default App;
