import React from "react";
import Header from "../globals/Header";
import Navigation from "../globals/Navigation";
import picture1 from "./../../assets/images/pictures/pic2.png";

export default function Page() {
    return (
        <div className="part w-100 first-part d-flex flex-column justify-content-between">
            <Header />
            <div className="first-part-brand w-100 py-3 d-flex justify-content-center align-items-center">
                <div className="first-part-brand-item d-flex justify-content-center align-items-center">
                    <div className="first-part-brand-item-content-picture w-100 h-100 d-flex justify-content-center align-items-center">
                        <img src={ picture1 } alt="my" className="img first-part-img" />
                    </div>
                    <div className="first-part-brand-item-text position-absolute py-1 px-2"> Web and Mobile developer, UI/UX Designer </div>
                </div>
            </div>
            <Navigation />
            <div className="first-part-bottom w-100 overflow-hidden">
                <div className="first-part-bottom-item item1 h-100 w-100 position-absolute"></div>
                <div className="first-part-bottom-item item2 h-100 w-100 position-absolute"></div>
            </div>
            <div className="w-100 py-5 bg-white">
                <div className="w-100 py-5 bg-white"></div>
            </div>
        </div>
    );
};