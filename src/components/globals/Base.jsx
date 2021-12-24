import React from "react";

export default function Base( { children } ) {
    return (
        <div className="w-100 content-page d-flex justify-content-center align-items-center">
            <div className="w-100 content-page-inner d-flex flex-column justify-content-center align-items-center">
                { children }
            </div>
        </div>
    );
}