import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";

import "./App.css";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            data: null,
            wholeData: null
        };
    }

    changeCity = city => {
        this.setState(
            {
                city: city,
                data: null,
                wholeData: null
            },
            this.callForData
        );
    };

    callForData = () => {
        let one = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=001eccf552aa9703a0bba9b81f75bbcb&lang=pl`;
        let two = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=001eccf552aa9703a0bba9b81f75bbcb&lang=pl`;

        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);

        axios
            .all([requestOne, requestTwo])
            .then(
                axios.spread((...responses) => {
                    const responseOne = responses[0];
                    const responseTwo = responses[1];

                    this.setState({
                        data: responseOne.data,
                        wholeData: responseTwo.data
                    });
                })
            )
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
            <div className="app">
                <Router>
                    <SearchBar
                        changeCity={this.changeCity}
                        callForData={this.callForData}
                    />
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route
                            path="/weather"
                            component={() => (
                                <Weather
                                    data={this.state.data}
                                    wholeData={this.state.wholeData}
                                />
                            )}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
