import React, {useState, useEffect} from 'react';
import Tags from './Tags';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 340px;
  border-radius: 5px;
  margin: 20px;
  background-color: #F9F9FA;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 3px solid #DFDFDF;
  background-color: #F9F9FA;
  height: 700px;


  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 40px auto;
    width: 80vw;
  }

  @media (max-width: 400px) {
    align-content: center;
  }  
`

const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`

const HeaderContainer = styled.div`
  height: 100px;
`

const DetailContainer = styled.div`
  height: 450px;
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
  height: 100px;
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

  :focus {
    outline: none;
    border: 3px solid #67867B;
    border-radius: 5px;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const Practice = (props) => {
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
      <Zoom>
        <ProjectDetailContainer>
          <HeaderContainer>
            <ProjectTitles>{props.title}</ProjectTitles>
            <hr></hr>
          </HeaderContainer>
          <DetailContainer> 
            <ProjectText>{props.goal}</ProjectText>
            <ProjectText>{props.highlight}</ProjectText> 
            <TagContainer>
              {TagsJSX}
            </TagContainer>                                              
          </DetailContainer>
          <ButtonContainer>
            <a href={props.github} target="_blank"rel="noopener noreferrer">
              <ProjectButtons>Github</ProjectButtons>
            </a>          
          </ButtonContainer>
        </ProjectDetailContainer>
      </Zoom>
    </ProjectContainers>  
  )
}

export default Practice;