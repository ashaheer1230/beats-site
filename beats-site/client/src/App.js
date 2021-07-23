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
  const [tempFile, setTempFile] = useState('https://drive.google.com/file/d/1LXvkMW8OzqHEjIHvUoRCvJl0f8Cw8kPz/view?usp=sharing')
*/
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
          <source src={val.musicFile} type="audio/mpeg"></source>
          <source src={"https://drive.google.com/file/d/1LXvkMW8OzqHEjIHvUoRCvJl0f8Cw8kPz/view?usp=sharing"} type="audio/wav"></source>
          <source src={"https://drive.google.com/file/d/1LXvkMW8OzqHEjIHvUoRCvJl0f8Cw8kPz/view?usp=sharing"} type="audio/ogg"></source>
          <p>Wont work</p>
        </audio>
      )
    })}
    </div>
  );
}

export default App;
