import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 20vw;
  border-radius: 3px;
  margin: 20px;
  background-color: #F9F9FA;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 3px solid #DFDFDF;
  background-color: #F9F9FA;


  @media (max-width: 1024px) {
    flex-direction: column;
    width: 80vw;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }  
`

const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`

const HeaderContainer = styled.div`
  flex-grow: 1;
`

const DetailContainer = styled.div`
  flex-grow: 3;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #516D63;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #4A4C4B;
`

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  flex-grow: 1;
`

const ProjectButtons = styled.button`
  border: none;
  background-color: #9AB1A9;
  color: #EEEEF2;
  padding: 12px;
  width: 125px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  margin: 10px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    transform: scale(1.1);
    background-color: #67867B;
  }
`

const Practice = (props) => {
  return (
    <ProjectContainers>
      <ProjectDetailContainer>
        <HeaderContainer>
          <ProjectTitles>{props.title}</ProjectTitles>
          <hr></hr>
        </HeaderContainer>
        <DetailContainer> 
          <ProjectText>{props.goal}</ProjectText>
          <ProjectText>{props.highlight}</ProjectText> 
          <ProjectText>{props.tech}</ProjectText>                                             
        </DetailContainer>
        <ButtonContainer>
          <a href={props.github} target="_blank"rel="noopener noreferrer">
            <ProjectButtons>Github</ProjectButtons>
          </a>          
        </ButtonContainer>
      </ProjectDetailContainer>
    </ProjectContainers>  
  )
}

export default Practice;