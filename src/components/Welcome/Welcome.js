import React from "react";

import "./Welcome.css";

import logo from "../../img/logo.svg";

function Welcome() {
    return (
        <div className="welcome">
            <h1 className="name name1">Weather</h1>
            <h1 className="name name2">Finder</h1>
            <img
                width="200px"
                height="200px"
                className="logo"
                src={logo}
                alt="logo"
            />
            <p className="made">made by</p>
            <p className="author">
                Mati
                {/* {" "} */}
                {/* <span className="emoji" role="img" aria-label="emoji">
                    ✌
                </span> */}
            </p>
        </div>
    );
}

export default Welcome;
