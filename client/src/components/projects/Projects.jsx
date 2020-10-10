import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../shared/Layout';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';
import PracticeCard from './PracticeCard';


const CoverImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(https://i.imgur.com/rpGxmsw.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  margin: 0 auto;
  text-align: center;
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 350px;
  background: rgba(239, 239, 242, 0.6);
`

const Header = styled.h3`
  font-size: 48px;
  margin: 10px;
  padding: 0;
  font-weight: 900;
  color: #1D1D1D;
`

const SubHeader = styled.h4`
  font-size: 24px;
  font-weight: 400;
  margin: 10px;
  padding: 0;
  color: #1D1D1D;
`

const FeaturedPanel = styled.div`
  display: flex;
  flex-direction: column;
`

const PracticePanel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`

const SectionHeading = styled.h4`
  font-size: 36px;
  color: #4A4C4B;
  margin: 30px;
  font-weight: 300;
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`

const PracticeCards = styled.div`
  display: flex;
  justify-content: center;
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
      goal={project.fields.goal}
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
      <CoverImage>  
        <Banner>
          <Header>Projects</Header>
          <SubHeader>Concise Code - Detailed Design - Excellent Experiences</SubHeader>          
        </Banner>
      </CoverImage>
      <FeaturedPanel>
        <SectionHeading>Featured Projects</SectionHeading>
        <Cards>{featuredCardJSX}</Cards>         
      </FeaturedPanel>
      <PracticePanel>       
        <SectionHeading>Practice Makes Perfect</SectionHeading>
        <PracticeCards>{practiceCardJSX}</PracticeCards>                
      </PracticePanel> 
    </Layout>
  )
}

export default Projects;
