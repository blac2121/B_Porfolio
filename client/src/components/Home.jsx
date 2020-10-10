import React from 'react';
import Layout from './shared/Layout';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

import coverphoto from '../assets/jessy-smith-zFOm6KzA-7g-unsplash.jpg';
import profilephoto from '../assets/Brianna.jpg';
import resumedoc from '../assets/LaCasse-Resume.pdf';



const Panels = styled.div`
  margin: 50px 0;
`

const AboutPanel = styled.div`
  margin: 50px 0;
  background-color: #DFE1E1;
  border: 2px solid #9AB1A9;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #9AB1A9;
`

const AboutSubContainers = styled.div`
  margin: 50px;
  background-color: #DFE1E1;
`

const AboutImgContainers = styled.div`
  margin-top: 225px;
  margin-right: 50px;
  background-color: #DFE1E1;
`

const Title = styled.h3`
  font-size: 42px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 25px;
  margin: 0;
  text-decoration: none;
`

const SubTitle = styled.h4`
  font-size: 36px;
  margin-top: 0px;
  margin-bottom: 5px;
`

const AboutText = styled.p`
  font-size: 24px;
`

const CoverImage = styled.img`
  width: 100%;
  height: 750px;
`

const CarouselContainer = styled.div`

.rec.rec-arrow {
  border-radius: 25px;
  margin: 0 15px;
  color: #FFFFFF;
  background-color: #9AB1A9;

  :hover {
    transform: scale(1.1);
    background-color: #67867B;
  }
`

const AboutContainer = styled.div`
  display: flex;
`

const ButtonContainer = styled.div`
  text-align: center;
`

const ResumeButton = styled.button`
  border: none;
  background-color: #9AB1A9;
  color: #EEEEF2;
  padding: 24px 42px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 10px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    transform: scale(1.1);
    background-color: #67867B;
  }
`

const Icons = styled.i`
  font-size: 6rem;
`


const Home = () => { 
  return (
    <Layout>
      <div>
        <CoverImage src={coverphoto} alt="Cover Photo" />
      </div>
      <Panels>
        <Title>Skills</Title>       
        <CarouselContainer>
          <Carousel itemsToShow={4} itemsToScroll={1} itemPadding={[50]} pagination={false}>
            <Icons className="devicon-react-original-wordmark"></Icons>
            <Icons className="devicon-ruby-plain-wordmark"></Icons>
            <Icons className="devicon-rails-plain-wordmark"></Icons>
            <Icons className="devicon-javascript-plain"></Icons>
            <Icons className="devicon-html5-plain-wordmark"></Icons>
            <Icons className="devicon-css3-plain-wordmark"></Icons>
            <Icons className="devicon-postgresql-plain-wordmark"></Icons>
            <Icons className="devicon-express-original-wordmark colored"></Icons>
            <Icons className="devicon-mongodb-plain-wordmark"></Icons>
            <Icons className="devicon-nodejs-plain"></Icons>
          </Carousel>                    
        </CarouselContainer>
        <ButtonContainer>
          <h5>See More</h5>
        </ButtonContainer>
      </Panels>
      <AboutPanel>
        <Title>About Me</Title>
        <AboutContainer>
          <AboutSubContainers>
            <SubTitle>Hi, I'm Brianna!</SubTitle>
            <AboutText>Welcome!  My journey into tech user experience started 6 years ago when I became a Quality Assurance Analyst. It was my first experience with agile teams and ensured users have nothing but best experiences and I've been in love with user experiences ever since! <br></br> <br></br> After two years I moved into a Business Analyst role where I was able to more closely focus on crafting which products to build and what features to include. I did Business Analyst and Product Management work for over 3 years and spent countless hours interviewing clients, user journey mapping, white-board designing, and was able to be the user advocate for pitching the best products users wanted and needed.<br></br> <br></br> After reading “Lean Startup” by Eric Ries again in the summer of 2020, I wanted to give coding a try. I love solving user problems and thought being able to code would be an even deeper user experience. I scoured the internet for a software bootcamp I thought would be the right fit for me and found the Software Engineer Immersive course General Assembly to be the perfect fit. I spent over 500 hours over 12 weeks learning, practicing, and tackling code. <br></br> <br></br> I’m excited to embark on the next iteration of my tech journey as a Software Engineer creating beautiful user products with the perfect market fit!  
            </AboutText>
            <ButtonContainer>
              <a href={resumedoc} download="LaCasse Resume">
                <ResumeButton>Resume</ResumeButton>
              </a>  
            </ButtonContainer>
          </AboutSubContainers>
          <AboutImgContainers>
            <img src={profilephoto} alt="Brianna Profile"/>
          </AboutImgContainers>
        </AboutContainer>
      </AboutPanel>
    </Layout>
  )
}

export default Home;