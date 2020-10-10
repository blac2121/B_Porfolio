import React from 'react';
import Layout from './shared/Layout';
import styled from 'styled-components';


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`

const Header = styled.h3`
  font-size: 48px;
`

const SubHeader = styled.h4`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`

const SectionPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: #DFE1E1;
  border: 2px solid #9AB1A9;
  padding-bottom: 70px;
  box-shadow: 1px 1px 1px 1px #9AB1A9;
  border-radius: 5px;
`

const SectionHeading = styled.h4`
  font-size: 36px;
  color: #4A4C4B;
  margin: 50px;
  font-weight: 300;
`

const IconPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
`

const Icons = styled.i`
  font-size: 6rem;
  margin: 25px 50px;
  // margin-left: 50px;
  // margin-right: 50px;
`

const Skills = () => { 

  return (
    <Layout>
      <HeaderContainer>
        <Header>Skills</Header>
        <SubHeader>Check out some of the languages, frameworks, and tools I've used!</SubHeader>
      </HeaderContainer>
      <MainContainer>
        <SectionPanel>
          <SectionHeading>Languages</SectionHeading>
          <IconPanel>
            <Icons className="devicon-html5-plain-wordmark colored" />
            <Icons className="devicon-css3-plain-wordmark colored" />
            <Icons className="devicon-javascript-plain colored" />
            <Icons className="devicon-ruby-plain-wordmark colored" />
          </IconPanel>
        </SectionPanel>
        <SectionPanel>     
          <SectionHeading>Frameworks / Libraries</SectionHeading>
          <IconPanel>
            <Icons className="devicon-react-original-wordmark colored" />
            <Icons className="devicon-rails-plain-wordmark colored" />     
            <Icons className="devicon-express-original-wordmark colored" />
            <Icons className="devicon-nodejs-plain colored" />
            <Icons className="devicon-bootstrap-plain-wordmark colored" />
          </IconPanel> 
        </SectionPanel>
        <SectionPanel>     
          <SectionHeading>Tools</SectionHeading>
          <IconPanel>
            <Icons className="devicon-postgresql-plain-wordmark colored" />
            <Icons className="devicon-mongodb-plain-wordmark colored" /> 
            <Icons className="devicon-git-plain-wordmark colored" /> 
            <Icons className="devicon-heroku-line-wordmark colored" />
            <Icons className="devicon-yarn-plain-wordmark colored" />
            <Icons className="devicon-npm-original-wordmark colored" />
            <Icons className="devicon-github-plain-wordmark colored" />
          </IconPanel> 
        </SectionPanel>
      </MainContainer>
    </Layout>
  )
}

export default Skills;