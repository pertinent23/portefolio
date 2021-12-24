import React, { Component } from "react";
import logo from './../../assets/images/sharing.png';
import { Link, useLocation } from "react-router-dom";
import links from './../../assets/docs/links.json';

function NavigationItem( { icon, link, title } ) {
    const 
        location = useLocation(),
        active = location.pathname === link;
    return (
        <div className={ "navigation-item d-flex align-items-center py-2 mr-md-4 ".concat( active ? "active" : "" ) }>
            <i className={ "bi bi-".concat( icon ) }></i>
            <Link to={ link }>
                <span className={ "navigation-item-text ".concat( active ? "ml-3 ml-md-2 px-3 py-2" : "ml-4 ml-md-2" ) }>
                    { title }
                </span>
            </Link>
        </div>
    );
};

function NavigationSocialItem( { icon, link } ) {
    return (
        <div className="p-1 d-flex justify-content-center align-items-center mr-3 navigation-social-item">
            <a href={ link } target="_blank">
                    <i className={ "bi bi-".concat( icon ) }></i>
            </a>
        </div>
    );
};

class Navigation extends Component{
    constructor( props ) {
        super( props );
        this.state = {
            status: 'off'
        };
    }

    _switch() {
        this.setState( {
            status: this.state.status === "off" ? "on" : "off"
        } );
    }

    render() {
        return (
            <div className={ "container-fluid content-navigation d-flex flex-column flex-md-row my-3 pt-3 sticky ".concat( this.state.status ) }>
                <div className="navigation-brand d-flex justify-content-between align-items-center">
                    <div className="navigation-brand-start">
                        <img src={ logo } alt="nav brand" className="img navigation-img d-none" />
                        <span className="navigation-brand-text"> PORTEFOLIO </span>
                    </div>
                    <div className="navigation-brand-end d-md-none">
                        <div className="navigation-action d-flex flex-column align-items-center justify-content-center rounded-circle" onClick={ () => this._switch() }>
                            <div className="navigation-action-item w-100"></div>
                            <div className="navigation-action-item w-100"></div>
                            <div className="navigation-action-item w-100"></div>
                        </div>
                    </div>
                </div>
                <div className="navigation my-3 d-flex flex-column flex-md-row ml-md-5">
                    <NavigationItem link="/" icon="house-fill" title="Home" />
                    { /** <NavigationItem link="/about" icon="question-octagon-fill" title="About" /> */ }
                    <NavigationItem link="/contact-me" icon="chat-square-quote-fill" title="Contact Me" />
                    <div className="bar my-3 d-md-none"></div>
                    <div className="navigation-social-network d-flex align-align-items-center justify-content-md-end pr-md-4 py-3">
                        <NavigationSocialItem icon="twitter" link={ links.twitter } />
                        <NavigationSocialItem icon="github" link={ links.github } />
                        <NavigationSocialItem icon="linkedin" link={ links.linkedin } />
                        <NavigationSocialItem icon="google" link={ links.google } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
export { 
    NavigationItem,
    NavigationSocialItem
};