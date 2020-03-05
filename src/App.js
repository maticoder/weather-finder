import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    changeCity = city => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=001eccf552aa9703a0bba9b81f75bbcb`
            )
            .then(res => {
                this.setState({
                    data: res.data
                });
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
            <div className="app">
                <SearchBar changeCity={this.changeCity} />
                <Weather data={this.state.data} />
            </div>
        );
    }
}

export default App;
