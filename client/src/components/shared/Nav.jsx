import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  width: 100vw;
  background-color: #9AB1A9;
  align-items: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }  
`

const NavLinksContainer = styled.div`
  display: flex;
`

const HomeLink = styled.h1`
  font-size: 36px;
  margin: 30px;
  color: #EEEEF2;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    margin: 10px;
  }  
`

const NavLinks = styled.p`
  font-size: 28px;
  margin: 25px;
  color: #EEEEF2;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    padding: 0;
    margin: 10px;
  }  
`


const Nav = () => { 
  return (
    <NavContainer>
      <Link to="/">
        <HomeLink>Home</HomeLink>
      </Link>
      <NavLinksContainer>
        <Link to="/projects"><NavLinks>Projects</NavLinks></Link>   
        <Link to="/skills"><NavLinks>Skills</NavLinks></Link>
        <Link to="/library"><NavLinks>Library</NavLinks></Link>                      
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Nav;