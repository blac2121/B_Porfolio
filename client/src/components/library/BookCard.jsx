import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 20vw;
  border-radius: 3px;
  margin: 20px;

  :hover {
    transform: scale(1.03);
  }
`

const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  align-items: center;
`


const HeaderContainer = styled.div`
  flex-grow: 1;
`

const DetailContainer = styled.div`
  flex-grow: 2;
`

const ProjectTitles = styled.h4`
  font-size: 18px;
`

const ProjectText = styled.p`
  font-size: 18px;
`


const BookCard = (props) => {
  return (
    <ProjectContainers>
      <ProjectDetailContainer>
        <HeaderContainer>
          <img src={props.img} alt={props.name}/>
        </HeaderContainer>
        <DetailContainer> 
          <ProjectTitles>{props.name}</ProjectTitles>
          <ProjectText>{props.author}</ProjectText>                          
        </DetailContainer>
      </ProjectDetailContainer>
    </ProjectContainers>  
  )
}

export default BookCard;