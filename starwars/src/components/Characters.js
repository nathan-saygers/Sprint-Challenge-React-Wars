import React, {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styled from "styled-components";

const CharacterWrapper = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Characters = () => {

const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page1`)
    .then(response => {
      setCharacterData(response.data.results)
    })
    .catch( error => {
      console.log("No Data Fetched", error)
    })
  },[]) 

  return (
    <CharacterWrapper>
      {characterData.map(character => {
        return (
          <CharacterCard
          name={character.name} 
          numOfFilms={character.films.length}
          weight={character.mass}
          />
        );
      })}
    </CharacterWrapper> 
  )
}

export default Characters;