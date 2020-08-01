import React, { Component } from 'react';
import Pet from './Pet';
import pf from 'petfinder-client'
import './App.css';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    }
  }

  componentDidMount() {
    petfinder.pet.find({ output: "full", location: "Toronto, ON" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets: pets
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <div>
          {this.state.pets.map(pet => {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ")
            } else {
              breed = pet.breeds.breed
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
              />
            )
          })}
        </div>
      </div>
    )

  }
}

export default App;
