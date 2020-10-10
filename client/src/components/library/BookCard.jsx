import React from 'react';
import styled from 'styled-components';

const ProjectContainers = styled.div`
  width: 20vw;
  border-radius: 3px;
  margin: 20px;
  background-color: #EEEEF2;
  box-shadow: 2px 3px 6px 1px #516D63;

  :hover {
    transform: scale(1.03);
  }
`

const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`

const HeaderContainer = styled.div`
  flex-grow: 1;
`

const DetailContainer = styled.div`
  flex-grow: 2;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #516D63;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #4A4C4B;
`


const BookCard = (props) => {
  return (
    <ProjectContainers>
      <ProjectDetailContainer>
        <HeaderContainer>
          {/* <img /> */}
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