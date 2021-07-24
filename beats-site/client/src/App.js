import React, {useState, useEffect} from 'react';
import Navi from "./components/Navi/Navi";
import './App.css';
import Axios from 'axios';

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
    <Navi />

    {allBeats.map((val) => {
      
      return (
        <audio key={val.Name} controls>
          <source src={"https://docs.google.com/uc?export=download&id=" + val.musicFile} type="audio/mpeg"></source>
          <source src={"https://docs.google.com/uc?export=download&id=" + val.musicFile} type="audio/wav"></source>
          <source src={"https://docs.google.com/uc?export=download&id=" + val.musicFile} type="audio/ogg"></source>
          <p>Your browser does not support audio playback</p>
        </audio>
   )})}
    </div>
  );
}

export default App;
