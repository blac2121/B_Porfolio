import React from 'react';
import Layout from './shared/Layout';
import styled from 'styled-components';


const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 80vw;
`

const SectionPanel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px; 
  margin: 50px;
  border: 1px solid #9AB1A9;
`

const SectionHeading = styled.h4`
  font-size: 36px;
  color: #4A4C4B;
  margin: 50px;
`


const Library = () => { 

  return (
    <Layout>
      <Main>
        <h3>Influential Books in My Library</h3>
        <p>Below are books I have found influencial in my quest to create amazing user products!</p>
        <SectionPanel><SectionHeading>Coding</SectionHeading></SectionPanel>
        <SectionPanel><SectionHeading>Industry</SectionHeading></SectionPanel> 
        <SectionPanel><SectionHeading>Methodologies</SectionHeading></SectionPanel>
        <SectionPanel><SectionHeading>Business</SectionHeading></SectionPanel>
      </Main>  
    </Layout>
  )
}

export default Library;
