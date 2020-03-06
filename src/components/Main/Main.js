import React, { Component } from "react";

import sun from "../../img/sun.svg";
import snow from "../../img/snow.svg";
import rain from "../../img/rain.svg";
import cloud from "../../img/cloud.svg";
import drizzle from "../../img/drizzle.svg";
import thunderstorm from "../../img/thunderstorm.svg";
import fog from "../../img/fog.svg";
import smoke from "../../img/smoke.svg";

import "./Main.css";

const mapDescriptionToIcon = {
    Thunderstorm: thunderstorm,
    Drizzle: drizzle,
    Rain: rain,
    Snow: snow,
    Mist: fog,
    Smoke: smoke,
    Haze: fog,
    Dust: smoke,
    Fog: fog,
    Sand: smoke,
    Ash: smoke,
    Squall: thunderstorm,
    Tornado: smoke,
    Clear: sun,
    Clouds: cloud
};

class Main extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="weather-content">
                <h1 className="city">
                    {data.name} ({data.sys.country})
                </h1>
                <p className="description">{data.weather[0].description}</p>
                <img
                    width="70"
                    src={mapDescriptionToIcon[data.weather[0].main]}
                    alt="cloud"
                />
                <div className="temperature">
                    <span className="main-temp">{data.main.temp}&#176;</span>
                    <div className="temp">
                        <span className="min-temp">
                            {data.main.temp_min}&#176;
                        </span>
                        <hr />
                        <span className="max-temp">
                            {data.main.temp_max}&#176;
                        </span>
                    </div>
                </div>
                {/* <p>
                    W {data.name} ({data.sys.country}) mamy obecenie{" "}
                    {data.main.temp - 273.15} stopni!
                </p> */}
            </div>
        );
    }
}

export default Main;
