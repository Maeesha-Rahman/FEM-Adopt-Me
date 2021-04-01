import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';


class SearchBox extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.search();
    }
    render() {
        return (
            <Consumer>
                {context => (
                    <div className="search-params">
                        <form onSubmit={this.handleFormSubmit}>
                            <label htmlFor="location">
                                Location
                       <input
                                    onChange={context.handleLocationChange}
                                    id="location"
                                    value={context.location}
                                    placeholder="location"
                                />
                            </label>
                            <label htmlFor="animal">
                                animal
                       <select
                                    id="animal"
                                    value={context.animal}
                                    onChange={context.handleAnimalChange}
                                    onBlur={context.handleAnimalChange}
                                >
                                    <option></option>
                                    {
                                        ANIMALS.map(animal => (
                                            <option key={animal} value={animal}>{animal}</option>
                                        ))
                                    }
                                </select>
                            </label>

                            <label htmlFor="breed">
                                Breed
                       <select
                                    id="breed"
                                    value={context.breed}
                                    onChange={context.handleBreedChange}
                                    onBlur={context.handleBreedChange}
                                    // if no breeds are available disable context select
                                    disabled={!context.breeds.length}
                                >
                                    <option></option>
                                    {context.breeds.map(breed => (
                                        <option key={breed} value={breed}>
                                            {breed}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>
                )}

            </Consumer>
        )
    }
}

export default SearchBox;