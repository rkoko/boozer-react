import React, { Component } from 'react';
import CocktailsContainer from './components/cocktailsContainer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="cocktails">
          <Route path="/cocktails" component={CocktailsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
