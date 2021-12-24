import React, { Component } from "react";
import logo from './../../assets/images/circular-pattern.png';

export default class Header extends Component{
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center header py-4">
                <img src={ logo } alt="circular pattern" className="img header-img" />
                <span className="header-text pl-3 pl-sm-4 text-center"> Hello, I'm Franck </span>
            </div>
        );
    }
}