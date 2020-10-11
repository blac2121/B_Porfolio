import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Layout from '../shared/Layout';
import styled from 'styled-components';
import BookCard from '../library/BookCard';


const CoverImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(https://i.imgur.com/vuNWd3V.png);
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
  background: rgba(239, 239, 242, 0.4);
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
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
`

const SectionHeading = styled.h4`
  font-size: 36px;
  color: #4A4C4B;
  margin: 50px 0 0 50px;
  padding: 0px;
  font-weight: 300;
`

const IconPanel = styled.div`
  display: flex;
  margin: 30px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }  

  @media (max-width: 400px) {
    flex-direction: column;
    align-content: center;
  }  
`

const Library = () => {
  const [books, setBooks] = useState([]);
  const [business, setBusiness] = useState([]);
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/books`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setBooks(response.data.records); 
    }
    getBooks();
  }, []);

  useEffect(() => {
    const industryBooks = books.filter((element) => element.fields.category === "industry")
    setIndustry(industryBooks);
    
    const businessBooks = books.filter((element) => element.fields.category === "business")
    setBusiness(businessBooks);
  }, [books]);

    
  const industryBooksJSX = industry.map((book, index) => (
    <BookCard
      key={index}
      name={book.fields.name}
      author={book.fields.author}
      img={book.fields.image}
      id={book.id}
    />
  ));

  const businessBooksJSX = business.map((book, index) => (
    <BookCard
      key={index}
      name={book.fields.name}
      author={book.fields.author}
      img={book.fields.image}
      id={book.id}
    />
  ));

  return (
    <Layout>
      <CoverImage>
        <Banner>
          <Header>Library</Header>
          <SubHeader>Some of the titles I found most influential</SubHeader>
        </Banner>       
      </CoverImage>
      <MainContainer>
        <SectionPanel>
          <SectionHeading>Industry</SectionHeading>
          <IconPanel>
            {industryBooksJSX}
          </IconPanel>
        </SectionPanel>
        <SectionPanel>
          <SectionHeading>Business</SectionHeading>
          <IconPanel>
            {businessBooksJSX}
          </IconPanel>
        </SectionPanel>
      </MainContainer>
    </Layout>
  )
}

export default Library;
