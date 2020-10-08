import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: #9AB1A9;
`

const Attribution = styled.h6`
  font-size: 18px;
  margin: 30px auto;
  color: #EEEEF2;
`

const Footer = () => { 

  return (
    <FooterContainer>
      <Attribution>Designed and handcrafted in small batches by BL</Attribution>
    </FooterContainer> 
  )
}

export default Footer;