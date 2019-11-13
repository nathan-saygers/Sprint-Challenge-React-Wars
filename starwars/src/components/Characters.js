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
const [pageNumber, setPageNumber] = useState(1);
const [characterData, setCharacterData] = useState([]);

const advancePageNumber = function(){
  if(pageNumber < 1) {
    setPageNumber(1);
  }
  setPageNumber(pageNumber + 1);
  console.log(pageNumber);
}

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${pageNumber}`)
    .then(response => {
      setCharacterData(response.data.results)
    })
    .catch( error => {
      console.log("No Data Fetched", error)
    })
  },[pageNumber]); 

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
      <button onClick={advancePageNumber}>Next Page</button>
    </CharacterWrapper> 
  )
}

export default Characters;