import React from "react";
import copyright from './../../assets/images/copyright.svg';
import logo from './../../assets/images/sharing.png';

export default function Footer() {
    return (
        <div className="container-fluid footer d-flex flex-column justify-content-center align-items-center py-5">
            <div className="bar w-100 my-5"></div>
            <img src={ logo } alt="footer logo" className="img footer-logo-img" />
            <div className="w-100 footer-data-name text-center py-4"> Franck Duval </div>
            <div className="w-100 d-flex footer-copyright justify-content-center align-items-center">
                <img src={ copyright } alt="copyright" className="img copyright-img" />
                <span className="copyright-text ml-3"> copyright { ( new Date() ).getFullYear() } </span>
            </div>
        </div>
    );
};