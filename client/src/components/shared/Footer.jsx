import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: #9AB1A9;
`

const AttributionContainer = styled.div`
  flex-grow: 5;
  padding-left: 50px;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 15px;
  align-items: center;
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

const Icons = styled.i`
  font-size: 4rem;
  margin: 15px;
`

const Footer = () => { 

  return (
    <FooterContainer>
      <AttributionContainer>        
        <span>Photo by <a href="https://unsplash.com/@pirye?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Amelie &amp; Niklas Ohlrogge</a> on <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <AttributionText>Designed and handcrafted in small batches by BL</AttributionText>
      </AttributionContainer>
      <IconContainer>
        <IconDiv>
          <a href="https://github.com/blac2121" target="_blank" >
            <Icons className="devicon-github-plain-wordmark" />
          </a>     
        </IconDiv>
        <IconDiv>     
          <a href="https://www.linkedin.com/in/bel1212/" target="_blank" >
            <Icons className="devicon-linkedin-plain" />
          </a> 
        </IconDiv>        
      </IconContainer>
    </FooterContainer> 
  )
}

export default Footer;