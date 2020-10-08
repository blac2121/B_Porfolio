import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import Library from '../src/components/Library';
import Projects from '../src/components/projects/Projects';
import Skills from '../src/components/Skills';
import styled from 'styled-components';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/library" component={Library} />
        
      </Switch>     
    </div>
  );
}

export default App;
