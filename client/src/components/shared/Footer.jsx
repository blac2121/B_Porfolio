import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: #9AB1A9;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }  
`

const AttributionContainer = styled.div`
  flex-grow: 1;
  padding-left: 30px;

  @media (max-width: 1024px) {
    text-align: center;
    padding: 0;
    margin-top: 20px;
  }  
`

const TaglineContainer = styled.div`
  flex-grow: 1;

  @media (max-width: 1024px) {
    text-align: center;
    margin-top: 20px;
  }  
`

const IconContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 20px 50px;
  justify-content: flex-end;
`

const AttributionText = styled.h6`
  font-size: 18px;
  color: #EEEEF2;
  padding: 0px;
  margin: 0px;
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
        <AttributionText>Home Coverphoto by <a href="https://unsplash.com/@jessysmith?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jessy Smith</a> on <a href="https://unsplash.com/s/photos/white-office?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></AttributionText>
        <AttributionText>Photo by <a href="https://unsplash.com/@visualdesign_inspiration?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Visual Design</a> on <a href="https://unsplash.com/s/photos/wireframe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></AttributionText>
        <AttributionText>Skills Coverphoto by <a href="https://unsplash.com/@cdr6934?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chris Ried</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></AttributionText>
        <AttributionText>Library Coverphoto by <a href="https://unsplash.com/@pirye?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Amelie &amp; Niklas Ohlrogge</a> on <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></AttributionText>
      </AttributionContainer> 
      <TaglineContainer>        
        <AttributionText>Designed and handcrafted in small batches by BL</AttributionText>
      </TaglineContainer> 
      <IconContainer>
        <IconDiv>
          <a href="https://github.com/blac2121" target="_blank" rel="noopener noreferrer" >
            <Icons className="devicon-github-plain-wordmark" />
          </a>     
        </IconDiv>
        <IconDiv>     
          <a href="https://www.linkedin.com/in/bel1212/" target="_blank" rel="noopener noreferrer" >
            <Icons className="devicon-linkedin-plain" />
          </a> 
        </IconDiv>        
      </IconContainer>
    </FooterContainer> 
  )
}

export default Footer;