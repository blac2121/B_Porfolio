import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 50px;
  background-color: #D8D9DE;
  box-shadow: 2px 2px 5px 2px #393B45;


  :hover {
    transform: scale(1.03);
  }
`


const BikeCoverPhoto = styled.img`
  width: 100%;
  height: 200px;
`

const ProjectDetailContainer = styled.div`
  margin: 15px;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #393B45;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #393B45;
`

const Featured = (props) => {
  return (
    <ProjectContainers>
      <a href={props.link} target="_blank">         
        <ProjectDetailContainer>
          <div><BikeCoverPhoto src={props.image}/></div>
          <div><ProjectTitles>{props.title}</ProjectTitles></div>                        
          <div><ProjectText>{props.tech}</ProjectText></div>                          
          <div><ProjectText>{props.highlight}</ProjectText></div> 
        </ProjectDetailContainer>
      </a>
    </ProjectContainers>  
  )
}

export default Featured;
