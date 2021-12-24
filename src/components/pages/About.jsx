import React, { Component } from "react";

import Base from "../globals/Base";
import Page from "./Page";
import "./../../assets/css/utils/home.css";

class About extends Component{
    render() {
        return (
            <Base>
                <Page />
                <div className="container text-center"> about </div>
            </Base>
        );
    }
}

export default About;