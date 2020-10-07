import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './shared/Layout';
import styled from 'styled-components';

const ProjectsBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 80vw;
`

const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 80vw;
`

const ProjectsTitle = styled.h3`
  font-size: 36px;
`

const ProjectsSubTitle = styled.p`
  font-size: 24px;
`

const ProjectsFeaturedPanel = styled.div`
  background-color: #6E7889;
  border: 1px solid gray;
  border-radius: 2px; 
  margin: 50px;
`

const ProjectsFeaturedContainer = styled.div`
  display: flex;
  margin: 50px;
`

const ProjectContainers = styled.div`
  width: 450px;
  height: 450px;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 50px;
  background-color: #D8D9DE;
  box-shadow: 2px 2px 5px 2px #393B45;


  :hover {
    transform: scale(1.03);
  }
`
const SectionHeadingContainer = styled.div`
  margin: 30px;
`

const SectionHeadings = styled.h4`
  font-size: 28px;
`

const SectionSubHeadings = styled.p`
  font-size: 24px;
`

const BikeCoverPhoto = styled.img`
  width: 100%;
  height: 200px;
`
const WorkingItCoverPhoto = styled.img`
  width: 100%;
  height: 200px;
`

const ProjectDetailContainer = styled.div`
  margin: 15px;
`

const ProjectTitles = styled.h4`
  font-size: 24px;
  color: #393B45;
`

const ProjectText = styled.p`
  font-size: 18px;
  color: #393B45;
`

const Projects = () => { 
  const [projects, setProjects] = useState([]);
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

  return (
    <Layout>
      <ProjectsBody>
        <ProjectsHeader>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectsSubTitle>Checkout some of my favorite projects!</ProjectsSubTitle>           
        </ProjectsHeader>
        <ProjectsFeaturedPanel>
          <SectionHeadingContainer>
            <SectionHeadings>Featured</SectionHeadings>
            <SectionSubHeadings>The following were designed and built by me</SectionSubHeadings>  
          </SectionHeadingContainer>
          <ProjectsFeaturedContainer>
            <ProjectContainers>
              <a href="https://blac2121.github.io/Bike_Route_Finder/" target="_blank">         
                <ProjectDetailContainer>
                  <div><BikeCoverPhoto src="https://i.imgur.com/3e2JiwP.png"/></div>
                  <div><ProjectTitles>Trailblaze: Discover your Next Bike Route</ProjectTitles></div>                        
                  <div><ProjectText>Tech Stack: HTML5, CSS, JavaScript, Axios</ProjectText></div>                          
                  <div><ProjectText>Highlights: Connecting to an API, filtering multiple values, sorting</ProjectText></div> 
                </ProjectDetailContainer>
              </a>
            </ProjectContainers>         
          </ProjectsFeaturedContainer>  
        </ProjectsFeaturedPanel>
        <ProjectsFeaturedPanel>
          <SectionHeadingContainer>
            <SectionHeadings>Practice Makes Perfect</SectionHeadings>
            <SectionSubHeadings>The following utlized other designs and some included collaboration with other developers!</SectionSubHeadings>         
          </SectionHeadingContainer>
          
        </ProjectsFeaturedPanel>
      </ProjectsBody>  
    </Layout>
  )
}

export default Projects;
