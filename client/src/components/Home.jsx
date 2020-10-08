import React from 'react';
import Layout from './shared/Layout';
import coverphoto from '../assets/jessy-smith-zFOm6KzA-7g-unsplash.jpg';
import styled from 'styled-components';

const CoverImage = styled.img`
  width: 100vw;
  height: 800px;
`

const Home = () => { 

  return (
    <Layout>
      <CoverImage src={coverphoto} alt="Cover Photo" />
      <h3>About Me</h3>
      <p></p>
      <h4>Tech Stack</h4>
      <h4>Featured Projects</h4>
    </Layout>
  )
}

export default Home;