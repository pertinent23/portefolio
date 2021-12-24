import React, { Component } from "react";

import Base from "../globals/Base";
import Page from "./Page";
import Footer from './../globals/Footer';

import "./../../assets/css/utils/home.css";
import "./../../assets/css/utils/contact-me.css";
import me from './../../assets/images/illustration/undraw_male_avatar_323b.svg';
import links from './../../assets/docs/links.json';

class ContactMe extends Component{
    render() {
        return (
            <Base>
                <Page />
                <div className="part fourth-part container-fluid py-4 d-flex flex-column align-items-center justify-content-center">
                    <div className="w-100 d-flex flex-column justify-content-center align-items-center content-me py-4 border rounded shadow">
                        <div className="d-flex flex-column content-me-img-container justify-content-center align-items-center">
                            <img src={ me } alt="me" className="img content-me-img" />
                            <div className="text-center py-3 content-me-name"> Franck Duval </div>
                            <div className="w-100 ml-1 py-3 content-me-logo">
                                <i className="bi bi-whatsapp"></i>
                            </div>
                            <div className="w-100 ml-1 py-2 content-me-logo-data">
                                <a target="_blank" href="https://wa.me/+237654284509?text=Hello?"> +237 654284509 </a>
                            </div>
                            <div className="w-100 ml-1 py-3 content-me-logo">
                                <i className="bi bi-github"></i>
                            </div>
                            <div className="w-100 ml-1 py-2 content-me-logo-data">
                                <a target="_blank" href={ links.github }> github </a>
                            </div>
                            <div className="w-100 ml-1 py-3 content-me-logo">
                                <i className="bi bi-twitter"></i>
                            </div>
                            <div className="w-100 ml-1 py-2 content-me-logo-data">
                                <a target="_blank" href={ links.twitter }> twitter </a>
                            </div>
                            <div className="w-100 ml-1 py-3 content-me-logo">
                                <i className="bi bi-linkedin"></i>
                            </div>
                            <div className="w-100 ml-1 py-2 content-me-logo-data">
                                <a target="_blank" href={ links.linkedin }> linkedin </a>
                            </div>
                            <div className="w-100 ml-1 py-3 content-me-logo">
                                <i className="bi bi-google"></i>
                            </div>
                            <div className="w-100 ml-1 py-2 content-me-logo-data">
                                <a target="_blank" href={ links.google }> GMail </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Base>
        );
    }
}

export default ContactMe;