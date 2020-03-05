import React from "react";
import styled from "styled-components"
import { Col  } from "reactstrap";
import img from "../imgs/placeholderimg.png"
  
  const CardStyle = styled.div `
  margin:5%;
  background:#535974;
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:2% 10%;
  flex-direction:row-reverse;
  `
  
  
  const Name = styled.p `
  color:white;
  
  font-weight:bold;
  font-size:2rem;
  m
  `
  
  const Info = styled.p `
  color:white;
  font-size:2rem;
  
  
  `
  
  const Div = styled.div `
  margin:0 3%;
  `
  


const HackCards = ({ hacks }) => {
  
 
    return (
      <Col xs="6" md="4" xl="3">
        <CardStyle >
          <Div>
          <Name>{hacks.title}</Name>
            <Info>{hacks.description}</Info>
            
           
            </Div>
  
            <Div>
            <Info> <img src = {img} ALT = "lifehack"/> </Info>
            </Div>
         
         
        </CardStyle>
      </Col>
    );
  };
  export default HackCards;