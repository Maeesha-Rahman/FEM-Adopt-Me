import React, { Component } from 'react';
import SearchBox from './SearchBox';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

class SearchParams extends Component {
    handleSearchSubmit() {
        Route('/');
    }
    render() {
        return (
            <div className="search-route">
                <SearchBox search={this.handleSearchSubmit} />
            </div>
        )
    }
}

export default SearchParams;