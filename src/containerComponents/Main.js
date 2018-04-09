import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {EventContainer} from './EventContainer';
import {EventListsContainer} from './EventListContainer';

export const Main = () => (
  <Switch>
    <Route exact path='/' component={EventListsContainer}/>
    <Route path='/:playerId' component={EventContainer} />
  </Switch>
);