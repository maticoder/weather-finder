import React, { Component } from "react";

import sun from "../../img/sun.svg";
import snow from "../../img/snow.svg";
import rain from "../../img/rain.svg";
import cloud from "../../img/cloud.svg";
import drizzle from "../../img/drizzle.svg";
import thunderstorm from "../../img/thunderstorm.svg";
import fog from "../../img/fog.svg";
import smoke from "../../img/smoke.svg";

import Chart from "../Chart/Chart";

import "./Main.css";

import moment from "moment";

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
        const { data, wholeData } = this.props;
        return (
            <div className="weather-content">
                <h1 className="city">
                    {data.name} ({data.sys.country})
                </h1>
                <p className="date">{moment().format("ddd, HH:mm")}</p>
                <p className="description">{data.weather[0].description}</p>
                <img
                    className="icon"
                    width="70"
                    height="70"
                    src={mapDescriptionToIcon[data.weather[0].main]}
                    alt="icon"
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
                <Chart data={wholeData} />
                {/* <p>
                    W {data.name} ({data.sys.country}) mamy obecenie{" "}
                    {data.main.temp - 273.15} stopni!
                </p> */}
            </div>
        );
    }
}

export default Main;
