import React, { Component } from "react";
import { Link } from "react-router-dom";

import Base from "../globals/Base";
import Footer from "../globals/Footer";
import Page from "./Page";

import "./../../assets/css/utils/home.css";
import me from "./../../assets/images/illustration/undraw_folder_files_re_2cbm.svg";
import cv from "./../../assets/images/illustration/undraw_subscribe_vspl.svg";
import doc from "./../../assets/docs/CV-sans-titre.pdf";
import links from './../../assets/docs/links.json';

class Home extends Component{
    render() {
        return (
            <Base>
                <Page />
                <div className="part w-100 second-part">
                    <div className="container-fluid second-part-content">
                        <div className="row m-0 p-0 py-5">
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center justify-content-md-end pr-md-5">
                                <div className="second-part-content-img mr-md-5">
                                    <img src={ me } alt="my" className="img second-part-img" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center justify-content-md-start pl-md-5">
                                <div className="second-part-text pt-4 pt-md-0 text-center"> 
                                    Hello, I'm <span> Franck </span> <span> Duval </span>, Web and Mobile developer, UI/UX designer. Undergraduate student in computer science, with the ambition of
                                    become an expert in cyber security. Self-taught, I have
                                    extensive development experience with language
                                    javascript programming and its frameworks (React
                                    Native, Vue, Angular ...).
                                    I master web, mobile and pc development with a
                                    fifteen programming languages. 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-4 bar"></div>
                    <div className="container-fluid second-part-content">
                        <div className="row m-0 p-0 py-5">
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center justify-content-md-end pr-md-5">
                                <div className="second-part-content-img mr-md-5">
                                    <img src={ cv } alt="my" className="img second-part-img" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center justify-content-md-start pl-md-5">
                                <div className="second-part-cv d-flex flex-column"> 
                                    <div className="second-part-cv-text py-2 px-3"> Download my CV </div>
                                    <Link target="_blank" download={ true } to={ doc }>
                                        <span className="second-part-cv-button mt-4 py-2 px-3 rounded d-flex justify-content-center align-items-center">
                                            <i className="bi bi-cloud-arrow-down-fill"></i>
                                            <span className="second-part-cv-button-text ml-3"> download </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-4">
                        <div className="row m-0">
                            <div className="col d-flex justify-content-center align-items-center contact-item p-3">
                                <a href={ links.twitter } target="_blank">
                                    <div className="contact-item-content d-flex flex-column align-items-center shadow rounded p-4">
                                        <i className="bi bi-twitter"></i>
                                        <span className="contact-item-text mt-3"> twitter </span>
                                    </div>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center contact-item p-3">
                                <a href={ links.github } target="_blank">
                                    <div className="contact-item-content d-flex flex-column align-items-center shadow rounded p-4">
                                        <i className="bi bi-github"></i>
                                        <span className="contact-item-text mt-3"> github </span>
                                    </div>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center contact-item p-3">
                                <a href={ links.linkedin } target="_blank">
                                    <div className="contact-item-content d-flex flex-column align-items-center shadow rounded p-4">
                                        <i className="bi bi-linkedin"></i>
                                        <span className="contact-item-text mt-3"> linkedin </span>
                                    </div>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center contact-item p-3">
                                <a href={ links.google } target="_blank">
                                    <div className="contact-item-content d-flex flex-column align-items-center shadow rounded p-4">
                                        <i className="bi bi-google"></i>
                                        <span className="contact-item-text mt-3"> google </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Base>
        );
    }
}

export default Home;