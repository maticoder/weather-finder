import React, { Component } from "react";

import Main from "../Main/Main";
import Loader from "../Loader/Loader";

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
                {this.props.data !== null && this.props.wholeData !== null ? (
                    <Main data={data} wholeData={wholeData} />
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}

export default Weather;
