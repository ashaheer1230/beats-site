import React, {useState, useEffect} from 'react';
import Navi from "./components/Navi/Navi";
import './App.css';
import Axios from 'axios';
import musicImg from './musicImg.jpg';

function App() {

  const [allBeats, setAllBeats] = useState([]);

  //Variables used to manually input music to DB
  /*const [filename, setfilename] = useState("Faith");
  const [tempo, setTempo] = useState(147);
  const [key, setKey] = useState('E');
  const [scale, setScale] = useState('Minor');
  const [tempFile, setTempFile] = useState('1LXvkMW8OzqHEjIHvUoRCvJl0f8Cw8kPz');*/

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
        < Navi />
      </div>
      <div className="row">

        <div className="column">
          <div className="filterSection">
            <h1>Test</h1>
          </div>
        </div>

        <div className="column">
          {allBeats.map((val) => {
          
            return (
              <div className="beatCard">

                <div flex={1}>
                  <img src={musicImg} alt="Cant display" className="cardImg">
                  </img>
                </div>

                <div flex={1}>
                  <h2 className="cardText">{val.Name}</h2>
                  <h5 className="cardText">{val.Tempo}bpm</h5>
                  <h5 className="cardText">{val.Key} {val.Scale}</h5>
                  <audio key={val.Name} controls controlsList="nodownload">
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
