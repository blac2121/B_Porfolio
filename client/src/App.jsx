import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Library
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/library" component={Library} /> */}
        {/* <Route exact path="/projects" component={Projects} /> */}
      </Switch>
      
    </div>
  );
}

export default App;
