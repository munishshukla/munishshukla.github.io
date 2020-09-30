import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './container/home/index';
import App from './App';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/default' render={() => <Redirect to= "/" />} />
      </Switch>
    </App>
  );
}