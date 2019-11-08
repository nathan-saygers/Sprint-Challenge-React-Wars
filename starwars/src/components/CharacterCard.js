import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 20rem;
height: 20rem;
background: white;
`

const CharacterCard = (props) => {
  return (
    <Card>
      <h2>{props.name}</h2>
      <p>{`Hi!  I'm ${props.name}! I appeared in ${props.numOfFilms} Star Wars movies. My weight you ask?  Bit of a strange question, but I weigh ${props.weight} kgs.`}</p>
    </Card>
  )
}

export default CharacterCard