import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: #EEEEF2;
  box-shadow: 2px 3px 6px 1px #516D63;
  margin: 40px 60px;

  :hover {
    transform: scale(1.03);
  }
`

const CoverPhotoContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const CoverPhoto = styled.img`
  width: 100%;
`

const ProjectDetailContainer = styled.div`
  flex-grow: 3;
  margin: 15px;
`

const ProjectLabels = styled.h4`
  color: #0A1F55;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #4A4C4B;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #4A4C4B;
  
`

const Featured = (props) => {
  return (   
    <a href={props.link} target="_blank">
      <ProjectContainers>
        {/* <CoverPhotoContainer>
          <CoverPhoto src={props.image} />
        </CoverPhotoContainer>          */}
        <ProjectDetailContainer>         
          <ProjectTitles>{props.title}</ProjectTitles> 
          <ProjectLabels>Tech Stack</ProjectLabels>
          <ProjectText> {props.tech}</ProjectText> 
          <ProjectLabels>Highlights</ProjectLabels>
          <ProjectText>{props.highlight}</ProjectText>
          <ProjectLabels>Github</ProjectLabels>
          <ProjectText>{props.github}</ProjectText>
        </ProjectDetailContainer>
      </ProjectContainers>   
    </a> 
  )
}

export default Featured;
