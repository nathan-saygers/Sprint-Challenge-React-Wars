import React from "react";
import styled from "styled-components";

const Card = styled.div`
width: 30rem;
height: 25rem;
padding: 2rem;
margin: 2rem;
background-image: url("https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
background-position: center;
`

const CharName = styled.h2`
font-size: 2.5rem;
color: yellow;
`

const CharIntro = styled.p`
font-size: 1.8rem;
color: yellow;
`

const CharacterCard = (props) => {
  return (
    <Card>
      <CharName>{props.name}</CharName>
      <CharIntro>{`Hi!  I'm ${props.name}! I appeared in ${props.numOfFilms} Star Wars movies. My weight you ask?  Bit of a strange question, but I weigh ${props.weight} kgs.`}</CharIntro>
    </Card>
  )
}

export default CharacterCard