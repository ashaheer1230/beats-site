import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import Contact from './Contact';

export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
