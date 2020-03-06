import React, { Component } from "react";

import Main from "../Main/Main";
import Loader from "../Loader/Loader";
import Welcome from "../Welcome/Welcome";

import "./Weather.css";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return (
            <div className="weather">
                {this.props.data !== null && this.props.data !== "" ? (
                    <Main data={data} />
                ) : this.props.data === "" ? (
                    <Welcome />
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}

export default Weather;
