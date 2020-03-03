import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import HackCards from "./HackCardsAP"
import { Container, Row } from "reactstrap";

const Form = styled.form `
display: flex;
  flex-direction: column;
  align-items: center;


`
const Input =styled.input `
width: 200px;
height: 30px;
margin: 0.5rem;
border: 2px solid #263650;
`



export default function HackLists () {

    const [data, setData] = useState ([]);
    const [query, setQuery] = useState("");

    useEffect (() => {

axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
.then(response => {
    console.log(response);
    const characters = response.data.results.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
  
    setData(characters);
  });
}, [query]);

const handleInputChange = event => {
setQuery(event.target.value);
};
return (
<div>
  <Form>
    <Input
      type="text"
      onChange={handleInputChange}
      value={query}
      name="name"
      tabIndex="0"
      className="prompt search-name"
      placeholder="search by name"
      autoComplete="off"
    />
  </Form>
<div>
        <Container>
        <Row>
            {data.map(characters => {
        return <HackCards characters={characters} key={characters.id} />;
      })}  </Row>
    </Container>
    </div>
        </div>
    )
}


