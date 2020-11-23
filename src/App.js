import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './components/Home';
import Grid from './components/Grid';

const App = () => (
  <Router>
    <Switch>
      <Route path="/grid">
        <Grid />
      </Route>

      <Route path="/">
        <Home />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
)

export default App;
