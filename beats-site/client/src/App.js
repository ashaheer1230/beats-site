import React, {useState, useEffect} from 'react';
import Navi from "./components/Navi/Navi";
import './App.css';
import Axios from 'axios';
import musicImg from './musicImg.jpg';

//const Spacer = require('react-spacer');

function App() {

  const [allBeats, setAllBeats] = useState([]);

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
        < Navi />
      </div>

      <div className="row">

        <div className="column-left">
          <div className="filterSection">
            <h1>Filters </h1>
            <br/>

            <form>
              <h3>Tempo</h3>
              <input type="checkbox" id="less90" name="less90" value="90"/>
              <label for="less90"> -90</label><br/>
              <input type="checkbox" id="90109" name="90109" value="90109"/>
              <label for="90109">90 - 109</label><br/>
              <input type="checkbox" id="110129" name="110129" value="110129"/>
              <label for="110129">110 - 129</label><br/>
              <input type="checkbox" id="130149" name="130149" value="130149"/>
              <label for="130149">130 - 149</label><br/>
              <input type="checkbox" id="150165" name="150165" value="150165"/>
              <label for="150165">150 - 165</label><br/>
              <input type="checkbox" id="more165" name="more165" value="165"/>
              <label for="more165"> 165+ </label><br/>

              <br></br>

              <h3>Scale</h3>
              <input type="checkbox" id="major" name="major" value="major"/>
              <label for="major">Major</label><br/>
              <input type="checkbox" id="minor" name="minor" value="minor"/>
              <label for="minor">Minor</label><br/>
              <input type="checkbox" id="other" name="other" value="other"/>
              <label for="other">Other</label><br/>

              <br></br>

              <h3>Key</h3>
              
              <input type="checkbox" id="A" name="A" value="A"/>
              <label for="A">A</label><br/>
              <input type="checkbox" id="A#" name="A#" value="A#"/>
              <label for="A#">A#</label><br/>
              <input type="checkbox" id="B" name="B" value="B"/>
              <label for="B">B</label><br/>
              <input type="checkbox" id="C" name="C" value="C"/>
              <label for="C">C</label><br/>
              <input type="checkbox" id="C#" name="C#" value="C#"/>
              <label for="C#">C#</label><br/>
              <input type="checkbox" id="D" name="D" value="D"/>
              <label for="D">D</label><br/>
              <input type="checkbox" id="D#" name="D#" value="D#"/>
              <label for="D#">D#</label><br/>
              <input type="checkbox" id="E" name="E" value="E"/>
              <label for="E">E</label><br/>
              <input type="checkbox" id="F" name="F" value="F"/>
              <label for="F">F</label><br/>
              <input type="checkbox" id="F#" name="F#" value="F#"/>
              <label for="F#">F#</label><br/>
              <input type="checkbox" id="G" name="G" value="G"/>
              <label for="G">G</label><br/>
              <input type="checkbox" id="G#" name="G#" value="G#"/>
              <label for="G#">G#</label><br/>

              
              <br/>
              <br/>

              <input type="button" id="submit" value="submit"></input>


            </form>
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
