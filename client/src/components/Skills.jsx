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
  margin: 30px auto;
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
  align-items: baseline;
`

const Icons = styled.i`
  font-size: 6rem;
  margin: 25px 50px;
`

const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  align-items: center;
`

const IconText = styled.p`
  font-size: 14px;
  padding: 0px;
  margin: 0px;
`

const Skills = () => { 

  return (
    <Layout>
      <HeaderContainer>
        <Header>Skills</Header>
        <SubHeader>Here are the languages, frameworks, and tools I've used</SubHeader>
      </HeaderContainer>
      <MainContainer>
        <SectionPanel>
          <SectionHeading>Languages</SectionHeading>
          <IconPanel>
            <Icons className="devicon-html5-plain-wordmark colored" />
            <Icons className="devicon-css3-plain-wordmark colored" />
            <Icons className="devicon-javascript-plain colored" />
            <Icons className="devicon-ruby-plain-wordmark colored" />
            <IconTextContainer>
              <Icons className="devicon-python-plain-wordmark" />
              <IconText>(In Progress)</IconText>
            </IconTextContainer>         
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