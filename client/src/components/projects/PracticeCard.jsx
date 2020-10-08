import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 30vw;
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

const Practice = (props) => {
  return (
    <ProjectContainers>
      <ProjectDetailContainer>
        <ProjectTitles>{props.title}</ProjectTitles>                        
        <ProjectText>{props.tech}</ProjectText>                          
        <ProjectText>{props.highlight}</ProjectText>
        <ProjectText>{props.github}</ProjectText>
      </ProjectDetailContainer>
    </ProjectContainers>  
  )
}

export default Practice;