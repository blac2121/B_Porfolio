import React, { useState, useEffect } from 'react';
import Tags from './Tags'
import styled from 'styled-components';

const ProjectContainers = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  margin: 40px 60px;
  border: 1px solid #DFDFDF;
  background-color: #F9F9FA;
`

const ProjectDetailContainer = styled.div`
  flex-grow: 3;
  margin: 35px;
`


const ProjectTitles = styled.h4`
  font-size: 28px;
  color: #516D63;
  margin-top: 5px;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #4A4C4B;
  line-height: 1.5;
`

const ProjectCoverPhotos = styled.img`
  width: 325px;
  height: 225px;
  padding: 20px;
  margin: 10px;
`
const ImgButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ButtonContainers = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
`

// const SeeMore = styled.p`
//   color: #67867B;
//   cursor: pointer;
//   font-size: 24px;
//   margin: 20px;

//   :hover {
//     transform: scale(1.1);
//   }
// `

const SeeMore = styled.button`
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

const TagContainer = styled.div`
  display: flex;
`

const Featured = (props) => {
  const [techStack, setTechStack] = useState(""); 

  useEffect(() => {
    if (props.tech) {
      setTechStack(props.tech)
    }   
  }, [props.tech]) 

  const getTechArr = techStack.split(",");

  const TagsJSX = getTechArr.map((tag, index) => (
    <Tags
      key={index}
      label={tag}
    />
  ));

  return (   
    <ProjectContainers>
      <ProjectDetailContainer>      
        <ProjectTitles>{props.title}</ProjectTitles> 
        <hr></hr>
        <ProjectText>{props.goal}</ProjectText>
        <ProjectText>{props.highlight}</ProjectText>
        <TagContainer>
          {TagsJSX}
        </TagContainer>       
      </ProjectDetailContainer>
      <ImgButtonContainer>
        <ProjectCoverPhotos src={props.image} />
        <ButtonContainers>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <SeeMore>Live Site</SeeMore>
          </a>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <SeeMore>Github</SeeMore>
          </a>
        </ButtonContainers>
      </ImgButtonContainer>
    </ProjectContainers>   
  )
}

export default Featured;
