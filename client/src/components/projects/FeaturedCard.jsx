import React, { useState, useEffect } from 'react';
import Tags from './Tags'
import styled from 'styled-components';

const ProjectContainers = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  margin: 40px 60px;
  border: 3px solid #DFDFDF;
  background-color: #F9F9FA;

  @media (max-width: 1024px) {
    flex-direction: column;
    flex-direction: column-reverse;
    width: 80vw;
    margin: 0;
  }

  @media (max-width: 400px) {
    margin: 40px auto;
  }
`

const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  @media (max-width: 1024px) {
    width: 425px;
    height: 325px;
    padding: 10px;
    margin: 5px;
  }  

  @media (max-width: 400px) {
    width: 225px;
    height: 125px;
    padding: 10px;
    margin: 5px;
  }  
`
const ImgButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1024px) {
    align-items: center;
  } 
`

const ImgContainer = styled.div`
  display: flex;
  flex-grow: 2;
  align-items: flex-end;

  @media (max-width: 400px) {
    margin: 20px auto;
  }  
`

const ButtonContainers = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  flex-grow: 1;
`

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

  :focus {
    outline: none;
    border: 3px solid #67867B;
    border-radius: 5px;
  }
`

const TagContainer = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }  
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
        <ImgContainer>
          <ProjectCoverPhotos src={props.image} />
        </ImgContainer>
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
