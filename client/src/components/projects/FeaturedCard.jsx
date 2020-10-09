import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: #EEEEF2;
  box-shadow: 3px 4px 7px 2px #516D63;
  margin: 40px 60px;
`

const ProjectDetailContainer = styled.div`
  flex-grow: 3;
  margin: 25px;
`


const ProjectTitles = styled.h4`
  font-size: 28px;
  color: #516D63;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #4A4C4B;
  line-height: 1.5;
`

const ProjectCoverPhotos = styled.img`
  width: 225px;
  height: 225px;
  padding: 20px;
  margin: 10px;
`

const ButtonContainers = styled.div`
  display: flex;
  margin: 10px;
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

const Featured = (props) => {
  return (   
    <ProjectContainers>
      <ProjectDetailContainer>      
        <ProjectTitles>{props.title}</ProjectTitles> 
        <hr></hr>
        <ProjectText>{props.goal}</ProjectText>
        <ProjectText>{props.highlight}</ProjectText>
        <ProjectText>{props.tech}</ProjectText>        
      </ProjectDetailContainer>
      <div>
        <div><ProjectCoverPhotos src={props.image} /></div>
        <ButtonContainers>
          <a href={props.link} target="_blank"><ProjectButtons>Site</ProjectButtons></a>
          <a href={props.github} target="_blank"><ProjectButtons>Github</ProjectButtons></a>
        </ButtonContainers>
      </div>
    </ProjectContainers>   
  )
}

export default Featured;
