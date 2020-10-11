import React, { useState, useEffect } from 'react';
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

const SeeMore = styled.p`
  color: #67867B;
  cursor: pointer;
  font-size: 24px;
  margin: 20px;

  :hover {
    transform: scale(1.1);
  }
`

const Featured = (props) => {
  const [techStack, setTechStack] = useState(""); 

  useEffect(() => {
    if (props.project) {
      setTechStack(props.project.fields.tech)
    }
  }, [props.project]) 

  console.log(techStack)

  // const tagJSX = featured.map((project, index) => (
  //   <FeaturedCard
  //     key={index}
  //     link={project.fields.link}
  //     title={project.fields.title}
  //     goal={project.fields.goal}
  //     image={project.fields.image}
  //     tech={project.fields.tech}
  //     highlight={project.fields.highlight}
  //     github={project.fields.github}
  //     id={project.id}
  //   />
  // ));
  return (   
    <ProjectContainers>
      <ProjectDetailContainer>      
        <ProjectTitles>{props.title}</ProjectTitles> 
        <hr></hr>
        <ProjectText>{props.goal}</ProjectText>
        <ProjectText>{props.highlight}</ProjectText>
        <ProjectText>{props.tech}</ProjectText>        
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
