import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  console.log(characterData);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/1/`)
    .then(response => {
      console.log(response.data)
      setCharacterData(response.data)
    })
    .catch( error => {
      console.log("No Data Fetched", error)
    })
  },[]) 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
