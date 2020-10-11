import React from 'react';
import styled from 'styled-components';


const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #516D63;  
  border-radius: 5px;
  color: #516D63;
  margin: 10px;
  width: 100px;
  height: 30px;
`

const TagTitle = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  padding: 0;
  margin: 0;
`

const Tag = (props) => {
  return (
    <TagContainer>
      <TagTitle>{props.label}</TagTitle>
    </TagContainer> 
  )
}

export default Tag;