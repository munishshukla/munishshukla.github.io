/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {App} from './App';
import {About} from './about';
import Main from './Main';

export default function Routes() {
  return (
    <Main>
        <BrowserRouter>
      <Switch>
        <Route
          exact
          path={'/'}
          render={() => <Redirect to={"/home"} />}
        />
        {/* <Route path={routes.COUNTER} component={CounterPage} /> */}
        <Route path={'/home'} component={App} />
        <Route path={'/about'} component={About} />
        
      </Switch>
      </BrowserRouter>
    </Main>
  );
}
