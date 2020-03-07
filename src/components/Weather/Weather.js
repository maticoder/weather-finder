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
        const { data, wholeData } = this.props;
        return (
            <div className="weather">
                {this.props.data !== null &&
                this.props.data !== "" &&
                this.props.wholeData !== null &&
                this.props.wholeData !== "" ? (
                    <Main data={data} wholeData={wholeData} />
                ) : this.props.data === "" && this.props.wholeData === "" ? (
                    <Welcome />
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}

export default Weather;
