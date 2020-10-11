import React from 'react';
import styled from 'styled-components';


const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: 20px;
  align-items: center;
`

const TagTitle = styled.p`
  font-size: 18px;
  text-align: center;
`


const Tag = (props) => {
  return (
    <TagContainer>
      <TagTitle>{props.name}</TagTitle>
    </TagContainer> 
  )
}

export default Tag;