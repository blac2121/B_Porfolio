import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../shared/Layout';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';
import PracticeCard from './PracticeCard';


const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 80vw;
`

const Title = styled.h3`
  font-size: 42px;
  margin-bottom: 20px;
`

const SectionPanel = styled.div`
  border-radius: 3px; 
  margin: 50px;
  background-color: #9AB1A9;
`

const SectionHeading = styled.h4`
  font-size: 36px;
  color: #EEEEF2;
  margin: 50px;
`

const Cards = styled.div`
  display: flex;
  margin: 50px;
`

const Projects = () => { 
  const [projects, setProjects] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [practice, setPractice] = useState([]);
  const [fetchEntries, setFetchEntries] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/projects`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setProjects(response.data.records); 
    }
    getProjects();
  }, [fetchEntries]);

  useEffect(() => {
    const featuredProjects = projects.filter((element) => element.fields.type === "featured")
    setFeatured(featuredProjects);
  }, [projects]);
    
  const featuredCardJSX = featured.map((project, index) => (
    <FeaturedCard
      key={index}
      link={project.fields.link}
      title={project.fields.title}
      image={project.fields.image}
      tech={project.fields.tech}
      highlight={project.fields.highlight}
      github={project.fields.github}
      id={project.id}
    />
  ));

  useEffect(() => {
    const practiceProjects = projects.filter((element) => element.fields.type === "practice")
    setPractice(practiceProjects);
  }, [projects]);

  const practiceCardJSX = practice.map((project, index) => (
    <PracticeCard
      key={index}
      link={project.fields.link}
      title={project.fields.title}
      tech={project.fields.tech}
      highlight={project.fields.highlight}
      github={project.fields.github}
      id={project.id}
    />
  ));

  return (
    <Layout>
      <Main>
        <Title>Projects</Title>
        <SectionPanel>
          <SectionHeading>Featured</SectionHeading>
          <Cards>{featuredCardJSX}</Cards>         
        </SectionPanel>
        <SectionPanel>       
          <SectionHeading>Practice Makes Perfect</SectionHeading>          
          <Cards>{practiceCardJSX}</Cards>  
        </SectionPanel>
      </Main>  
    </Layout>
  )
}

export default Projects;
