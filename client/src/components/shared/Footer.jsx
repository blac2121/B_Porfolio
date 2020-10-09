import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: #9AB1A9;
  padding: 20px;
`

const AttributionContainer = styled.div`
  flex-grow: 5;
  margin: 0 auto;
`

const IconContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 15px;
`

const AttributionText = styled.h6`
  font-size: 18px;
  color: #EEEEF2;
`

const IconDiv = styled.div`
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`


const IconLink = styled.a`

`

const Icons = styled.i`
  font-size: 4rem;
  margin: 15px;
`

const Footer = () => { 

  return (
    <FooterContainer>
      <AttributionContainer>
        <AttributionText>Designed and handcrafted in small batches by BL</AttributionText>
      </AttributionContainer>
      <IconContainer>
        <IconDiv>
          <Icons className="devicon-github-plain-wordmark" />
          <IconLink href="https://github.com/blac2121" target="_blank" />     
        </IconDiv>
        <IconDiv>
          <Icons className="devicon-linkedin-plain" />
          <IconLink href="https://www.linkedin.com/in/bel1212/" target="_blank" />
        </IconDiv>        
      </IconContainer>
    </FooterContainer> 
  )
}

export default Footer;