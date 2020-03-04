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

axios.get("https://howto5.herokuapp.com/api/study/")
.then(response => {
    console.log(response);
    const characters = response.data.filter(character =>
      character.title.toLowerCase().includes(query.toLowerCase())
    );
  
    setData(characters);
  });
}, [query]);

const handleInputChange = event => {
setQuery(event.target.value);
};
return (
<div>
  <form className="search">
    <Input
      type="text"
      onChange={handleInputChange}
      value={query}
      name="name"
      tabIndex="0"
      className="prompt search-name"
      placeholder="search by title"
      autoComplete="off"
    />
  </form>
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


