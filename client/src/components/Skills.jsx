import React from 'react';
import Layout from './shared/Layout';
import styled from 'styled-components';


const Icons = styled.i`
  font-size: 6rem;
`

const Skills = () => { 

  return (
    <Layout>
      <div>
        <h3>Skills</h3>
        <p>Below are various skills I've learned and continue to learn!</p>
      </div>
      <div>
        <h4>Languages</h4>
        <div>
          <Icons className="devicon-html5-plain-wordmark colored"></Icons>
          <Icons className="devicon-css3-plain-wordmark colored"></Icons>
          <Icons className="devicon-javascript-plain colored"></Icons>
          <Icons className="devicon-ruby-plain-wordmark colored"></Icons>
        </div>
      </div>
      <div>     
        <h4>Frameworks / Libraries</h4>
        <div>
          <Icons className="devicon-react-original-wordmark colored"></Icons>
          <Icons className="devicon-rails-plain-wordmark colored"></Icons>     
          <Icons className="devicon-express-original-wordmark colored"></Icons>
          <Icons className="devicon-nodejs-plain colored"></Icons>
        </div> 
      </div>
      <div>
        <h4>Developer Tools</h4>
        <div>
          <Icons className="devicon-postgresql-plain-wordmark colored" />
          <Icons className="devicon-mongodb-plain-wordmark colored" />          
        </div>
      </div>
      <div>
        <h4>Project Management Tools</h4>
        <div>
          <Icons className="devicon-trello-plain colored" />
          <h5>JIRA</h5>
        </div>
      </div>
    </Layout>
  )
}

export default Skills;