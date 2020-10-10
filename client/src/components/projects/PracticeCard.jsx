import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 20vw;
  border-radius: 3px;
  margin: 20px;
  background-color: #EEEEF2;
  box-shadow: 2px 3px 6px 1px #516D63;

  :hover {
    transform: scale(1.03);
  }
`

const ProjectDetailContainer = styled.div`
  margin: 15px;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #4A4C4B;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #4A4C4B;
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

  :hover {
    transform: scale(1.1);
    background-color: #67867B;
  }
`

const Practice = (props) => {
  return (
    <ProjectContainers>
      <ProjectDetailContainer>
        <ProjectTitles>{props.title}</ProjectTitles>                        
        <ProjectText>{props.tech}</ProjectText>                          
        <ProjectText>{props.highlight}</ProjectText>
        <a href={props.github} target="_blank"rel="noopener noreferrer">
          <ProjectButtons>Github</ProjectButtons>
        </a>
      </ProjectDetailContainer>
    </ProjectContainers>  
  )
}

export default Practice;