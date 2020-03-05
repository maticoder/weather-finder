import React, { Component } from "react";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return (
            <div className="weather">
                {this.props.city !== "" && this.props.data !== null && (
                    <p>
                        W {data.name} ({data.sys.country}) mamy obecenie{" "}
                        {data.main.temp - 273.15} stopni!
                    </p>
                )}
            </div>
        );
    }
}

export default Weather;
