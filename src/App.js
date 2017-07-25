import React, { Component } from 'react';
import CocktailsContainer from './components/cocktailsContainer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Nav from './components/nav'
import AuthAdapter from './components/AuthAdapter'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/cocktails" component={CocktailsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
