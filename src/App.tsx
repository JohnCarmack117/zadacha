import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemsPage } from './components/ItemsPage';
import { LogoPage } from './components/LogoPage';

import Container from '@material-ui/core/Container';
import { AboutPage } from './components/AboutPage';
 
const App: React.FunctionComponent = () => {

  return (
  <BrowserRouter>
    <Navbar/>
      <Container maxWidth="sm"> 
        <Switch>
          <Route component={ LogoPage } path="/" exact/>
          <Route component={ ItemsPage } path="/items"/>
          <Route component={ AboutPage } path="/about"/>
        </Switch>
      </Container> 
  </BrowserRouter>
  )
}

export default App;
