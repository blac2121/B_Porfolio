import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import Library from '../src/components/Library';
import Projects from '../src/components/projects/Projects';
import styled from 'styled-components';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/projects" component={Projects} />
      </Switch>     
    </div>
  );
}

export default App;
