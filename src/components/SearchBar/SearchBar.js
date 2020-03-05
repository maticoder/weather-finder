import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="input-field">
                    <input
                        id="city"
                        type="text"
                        autocomplete="off"
                        className="city-input"
                        value={this.props.city}
                        onChange={this.props.changeCity}
                        required
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label for="city" className="city-label">
                        City
                    </label>
                </div>
            </div>
        );
    }
}

export default SearchBar;
