import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            data: "", // zmienic na ""
            wholeData: "" // zmienic na ""
        };
    }

    changeCity = city => {
        this.setState(
            {
                city: city,
                data: null,
                wholeData: null
            },
            () => {
                axios
                    .get(
                        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=001eccf552aa9703a0bba9b81f75bbcb&lang=pl`
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
                axios
                    .get(
                        `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=001eccf552aa9703a0bba9b81f75bbcb&lang=pl`
                    )
                    .then(res => {
                        this.setState({
                            wholeData: res.data
                        });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        );
    };

    render() {
        return (
            <div className="app">
                <SearchBar changeCity={this.changeCity} />
                <Weather
                    data={this.state.data}
                    wholeData={this.state.wholeData}
                />
            </div>
        );
    }
}

export default App;
