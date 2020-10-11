import React from 'react';
import Layout from './shared/Layout';
import styled from 'styled-components';


const CoverImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(https://i.imgur.com/Z0eW4xI.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  margin: 0 auto 40px;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 350px;
  background: rgba(239, 239, 242, 0.7);
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  margin-bottom: 50px;
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

const SectionPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 0;
  background-color: #F9F9FA;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid #DFDFDF;
  background-color: #F9F9FA;

  @media (max-width: 400px) {
    width: 95vw;
    margin: 30px auto;
  }
`

const SectionHeading = styled.h4`
  font-size: 36px;
  color: #4A4C4B;
  margin: 50px 0 20px 50px;
  font-weight: 300;

  @media (max-width: 400px) {
    margin: 50px auto 10px;
    text-align: center;
  } 
`

const IconPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-bottom: 55px;
  align-items: baseline;
  justify-content: center;  
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
      <CoverImage>
        <Banner>
          <Header>Skills</Header>
          <SubHeader>Here are the languages, frameworks, and tools I've used</SubHeader>
        </Banner>
      </CoverImage>
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