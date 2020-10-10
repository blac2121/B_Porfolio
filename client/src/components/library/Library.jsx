import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Layout from '../shared/Layout';
import styled from 'styled-components';
import BookCard from '../library/BookCard'

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
  // background-color: #DADAE3;
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
`

const Library = () => {
  const [books, setBooks] = useState([]);
  const [business, setBusiness] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [fetchEntries, setFetchEntries] = useState(false);

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
  }, [fetchEntries]);

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
      <HeaderContainer>
        <Header>Library</Header>
        <SubHeader>Here are some of the titles I found most influential!</SubHeader>
      </HeaderContainer>
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
