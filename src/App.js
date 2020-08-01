import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Results from './Results';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <header>
            <Link to="/">
              Adopt me!
        </Link>
          </header>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    )
  }
}



export default App;
