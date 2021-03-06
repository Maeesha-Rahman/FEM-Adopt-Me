import React, { createContext } from 'react';

const SearchContext = createContext({
    location: "Toronto, ON",
    animal: "",
    breed: "",
    breeds: [],
    handleAnimalChange() { },
    handleBreedChange() { },
    handleLocationChange() { },
    getBreeds() { }
})

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;