import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MTGForm from '../containers/HomeContainer.jsx';

const Main = () => (
  <main> 
    <Switch>
      <Route exact path='/' component={MTGForm}/>
    </Switch>
  </main>
);

export default Main;