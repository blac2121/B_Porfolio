import React from 'react';
import styled from 'styled-components';


const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: 20px;
  align-items: center;

  @media (max-width: 400px) {
    width: 80vw;
  }  
`

const HeaderContainer = styled.div`
  margin: 0;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
` 

const ProjectTitles = styled.h4`
  font-size: 18px;
  text-align: center;
`

const ProjectText = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0;
`


const BookCard = (props) => {
  return (
    <ProjectDetailContainer>
      <HeaderContainer>
        <img src={props.img} alt={props.name}/>
      </HeaderContainer>
      <DetailContainer> 
        <ProjectTitles>{props.name}</ProjectTitles>
        <ProjectText>{props.author}</ProjectText>                          
      </DetailContainer>
    </ProjectDetailContainer> 
  )
}

export default BookCard;