import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  width: 100vw;
  height: 100px;
`

const NavLinksContainer = styled.div`
  display: flex;
`

const NavLinks = styled.p`
  font-size: 24px;
  margin: 10px;
`


const Nav = () => { 
  return (
    <NavContainer>
      <Link to="/"><div><h1>Brianna's Portfolio</h1></div></Link>
      <NavLinksContainer>
        <Link to="/projects"><NavLinks>Projects</NavLinks></Link>                
        <Link to="/library"><NavLinks>Library</NavLinks></Link>                      
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Nav;