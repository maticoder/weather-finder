import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ""
        };
    }

    onWetherInputChange = e => {
        this.setState({
            city: e.target.value
        });
    };

    onWeatherFormSubmit = e => {
        e.preventDefault();
        this.props.changeCity(this.state.city);
    };

    render() {
        return (
            <div className="search-bar">
                <form
                    onSubmit={this.onWeatherFormSubmit}
                    className="input-field"
                >
                    <input
                        id="city"
                        type="text"
                        autoComplete="off"
                        className="city-input"
                        value={this.state.city}
                        onChange={this.onWetherInputChange}
                        required
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="city" className="city-label">
                        City
                    </label>
                </form>
            </div>
        );
    }
}

export default SearchBar;
