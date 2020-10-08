import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 30vw;
  border-radius: 3px;
  background-color: #EEEEF2;
  box-shadow: 2px 3px 6px 1px #516D63;
  margin: 20px;

  :hover {
    transform: scale(1.03);
  }
`

const CoverPhoto = styled.img`
  width: 100%;
  height: 200px;
`

const ProjectDetailContainer = styled.div`
  margin: 15px;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #86837B;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #86837B;
`

const Featured = (props) => {
  return (
    <ProjectContainers>
      <a href={props.link} target="_blank">         
        <ProjectDetailContainer>
          <CoverPhoto src={props.image}/>
          <ProjectTitles>{props.title}</ProjectTitles>                        
          <ProjectText>Tech Stack: {props.tech}</ProjectText>                          
          <ProjectText>Highlights: {props.highlight}</ProjectText>
          <ProjectText>Github: {props.github}</ProjectText>
        </ProjectDetailContainer>
      </a>
    </ProjectContainers>  
  )
}

export default Featured;
