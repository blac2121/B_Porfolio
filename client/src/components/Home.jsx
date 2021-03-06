import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './shared/Layout';
import Carousel from 'react-elastic-carousel';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import profilephoto from '../assets/Brianna.jpg';
import resumedoc from '../assets/LaCasse Resume.pdf';

const CoverImage = styled.div`
  display: flex;
  background: url(https://i.imgur.com/4NEYM67.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 1050px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    align-items: center;
    height: 339px;
  }  

  @media (max-width: 400px) {
    background: url(https://i.imgur.com/BHAYUFG.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 339px;
  }  
  
`

const EmptyBanner = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    display: none;
  }  

  @media (max-width: 400px) {
    display: none;
  }  
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding-left: 20px;
  min-height: 500px;

  @media (max-width: 1024px) {
    justify-content: center;
    background: rgba(239, 239, 242, 0.6);
    width: 100%;
    min-height: 339px;
  }  

  @media (max-width: 400px) {
    height: 339px;
    background: rgba(239, 239, 242, 0.5);
    width: 100%;
  }  
`


const HeaderTitle = styled.h3`
  font-size: 48px;
  text-align: center;
  color: white;

  @media (max-width: 1024px) {
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
  } 

  @media (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 32px;
  }  
`

const HeaderAboutText = styled.p`
  font-size: 32px;
  color: white;
  padding: 0 0 30px 0;

  @media (max-width: 1024px) {
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
  }  

  @media (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 30px;
    font-size: 18px;
    color: white;
  }  
`

const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;

  @media (max-width: 400px) {
    flex-direction: column;   
  }  
`

const HeaderSeeMore = styled.p`
  color: #9AB1A9;
  cursor: pointer;
  font-size: 24px;

  :hover {
    transform: scale(1.1);
    color: #67867B;
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    color: black;
  } 

  @media (max-width: 400px) {
    margin: 10px;
    padding: 0;
  }  
`

const Panels = styled.div`
  margin: 50px 0;
`

const AboutPanel = styled.div`
  display-flex;
  background-color: #DFE1E1;
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
`

const AboutContainer = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  } 
`

const AboutSubContainers = styled.div`
  margin: 10px 50px 50px;
  background-color: #DFE1E1;
`

const AboutImgContainers = styled.div`
  margin-top: 225px;
  margin-right: 50px;
  background-color: #DFE1E1;

  @media (max-width: 1024px) {
    margin: 10px auto;
  } 
`

const Title = styled.h3`
  font-size: 42px;
  text-align: center;
`

const SubTitle = styled.h4`
  font-size: 36px;
  margin: 0;
`

const AboutText = styled.p`
  font-size: 24px;
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

const SeeMore = styled.p`
  color: #9AB1A9;
  cursor: pointer;
  font-size: 24px;
  margin-top: 50px;

  :hover {
    transform: scale(1.1);
    color: #67867B;
    text-decoration: underline;
  }
`


const ButtonContainer = styled.div`
  text-align: center;
`

const HeaderResumeButton = styled.button`
  border: none;
  background-color: #9AB1A9;
  color: #EEEEF2;
  padding: 20px 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin-right: 30px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    transform: scale(1.1);
    background-color: #67867B;
  }

  :focus {
    outline: none;
    border: 3px solid #67867B;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    color: black;
  } 

  @media (max-width: 400px) {
    margin: 0;
    margin-top: 10px;
  }  
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

  :focus {
    outline: none;
    border: 3px solid #67867B;
    border-radius: 5px;
  }
`

const Icons = styled.i`
  font-size: 6rem;
`

const Home = () => { 

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 700, itemsToShow: 4 },
  ];

  return (
    <Layout>
      <div>
        <CoverImage>
          <EmptyBanner></EmptyBanner>          
          <Banner>
            <div>
              <HeaderTitle>Welcome, I'm Brianna!</HeaderTitle>
              <HeaderAboutText>Let's build user centric, <br></br> scalable solutions together</HeaderAboutText>                       
            </div>
            <HeaderButtonContainer>
              <a href='https://docs.google.com/document/d/1TpgNcMlfuu0n4BcxM09SCs1M-BdRe3xCzBGK_EcYZ6Q/edit?usp=sharing'  target="_blank" rel="noopener noreferrer">
                <HeaderResumeButton>Resume</HeaderResumeButton>
              </a>  
              <Link to='/projects'>
                <HeaderSeeMore>Projects</HeaderSeeMore>
              </Link>  
            </HeaderButtonContainer>
          </Banner>
        </CoverImage>
      </div>
      <Zoom>
        <Panels>
          <Title>Skills</Title>       
          <CarouselContainer>
            <Carousel itemsToShow={4} itemsToScroll={1} pagination={false} breakPoints={breakPoints}>
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
            <Link to='/skills'>
              <SeeMore>See More</SeeMore>
            </Link>    
          </ButtonContainer>
        </Panels>
      </Zoom>  
      <Zoom>  
        <AboutPanel>       
          <Title>About Me</Title>
          <AboutContainer>
            <AboutSubContainers>
              <SubTitle>Hi, I'm Brianna!</SubTitle>
              <AboutText>Over the years, my time spent on agile teams revealed the importance of quality, detail, design, and customer perspective in developing delightful experiences. My journey started 6 years ago  as a Quality Assurance Analyst where I stepped into my first experience with agile teams and ensured users had nothing but the best experiences. I've been in love with user experiences ever since! <br></br> <br></br> After two years I moved into a Business Analyst role where I more closely focused on crafting which products to build and what features to include. Over the course of almost 4 years as a Business Analyst and Product Manager, I spent countless hours conducting client interviews, constructing user journey maps, iterating on white-board designs, and advocating for the best products users wanted and needed. <br></br> <br></br> After reading <i>The Lean Startup</i> by Eric Ries (twice), I wanted to give coding a try. I love solving user problems and thought being able to code would be an even deeper connection to the user experience. I scoured the internet for a software bootcamp I thought would be the right fit for me and found the Software Engineer Immersive course offered by General Assembly to be the perfect fit. I spent over 500 hours over 12 weeks learning, practicing, and tackling code. <br></br> <br></br> I’m excited to embark on the next iteration of my tech journey as a Software Engineer, creating beautiful user products with the perfect market fit!</AboutText>  
              <ButtonContainer>
                <a href='https://docs.google.com/document/d/1TpgNcMlfuu0n4BcxM09SCs1M-BdRe3xCzBGK_EcYZ6Q/edit?usp=sharing'  target="_blank" rel="noopener noreferrer">
                  <ResumeButton>Resume</ResumeButton>
                </a>  
              </ButtonContainer>
            </AboutSubContainers>
            <AboutImgContainers>
              <img src={profilephoto} alt="Brianna Profile"/>
            </AboutImgContainers>
          </AboutContainer>
        </AboutPanel>
      </Zoom>  
      <Zoom>
        <Panels>
          <Title>Library</Title>       
          <CarouselContainer>
            <Carousel itemsToShow={4} itemsToScroll={1} pagination={false} breakPoints={breakPoints}>
              <img src="https://i.imgur.com/qSrMGM4.png" alt="The Pragmatic Programmer" />
              <img src="https://i.imgur.com/s6tgKdY.png" alt="The Lean Startup" />
              <img src="https://i.imgur.com/fFhqO1e.png" alt="The Lean Product Playbook" />
              <img src="https://i.imgur.com/1zJl6Yf.png" alt="Inspired: How to Create Tech Products Customers Love" />
              <img src="https://i.imgur.com/tHWXXOm.png" alt="Creativity, Inc" />
              <img src="https://i.imgur.com/npvYDus.png" alt="Built to Last" />
              <img src="https://i.imgur.com/4jMJWsY.png" alt="Crossing the Chasm" />
            </Carousel>                    
          </CarouselContainer>
          <ButtonContainer>
            <Link to='/library'>
              <SeeMore>See More</SeeMore>
            </Link>        
          </ButtonContainer>
        </Panels>
      </Zoom>  
    </Layout>
  )
}

export default Home;