import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import pf from 'petfinder-client';
import { Provider } from './SearchContext';
import Results from './Results';
import Details from './Details';
import SearchParams from './SearchParams';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Toronto, ON",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    }
  }


  handleLocationChange = event => {
    this.setState({
      location: event.target.value,
    })
  }

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value,
      breed: ""
    }, this.getBreeds)
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    })
  }

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal })
        .then(data => {
          if (data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            })
          } else {
            this.setState({ breeds: [] })
          }
        })
    } else {
      this.setState({ breeds: [] })
    }
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Router>
            <header>
              <Link to="/">
                Adopt me!
              </Link>
              <Link to="/search-params">
                <span aria-label="search" role="img">🔍</span>
              </Link>
            </header>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    )
  }
}



export default App;
