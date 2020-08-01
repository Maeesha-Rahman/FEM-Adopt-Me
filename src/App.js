import React, { Component } from 'react';
import Pet from './Pet';
import './App.css';

class App extends Component {

  handleTitleClick = () => {
    alert("you clicked the title")
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Luna" animal="dog" breed="Havanese" />
      </div>
    )

  }
}

export default App;
