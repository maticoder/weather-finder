import React, { Component } from "react";

import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ""
        };
    }

    changeCity = e => {
        this.setState({
            city: e.target.value
        });
    };

    render() {
        return (
            <div className="app">
                <SearchBar
                    city={this.state.city}
                    changeCity={this.changeCity}
                />
                <p>{this.state.city}</p>
            </div>
        );
    }
}

export default App;
