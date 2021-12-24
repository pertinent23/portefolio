import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactMe from './components/pages/ContactMe';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/contact-me' element={ <ContactMe /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
