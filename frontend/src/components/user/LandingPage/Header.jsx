import React from "react";

export default function () {
    return (
        <div className="flex justify-between mx-8 my-4">
            <div className="flex">
                <div></div>
                <div>
                    <p>Car Rental</p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="menu">
                    <p>Home</p>
                </div>
                <div className="menu">
                    <p>Vehicles</p>
                </div>
                <div className="menu">
                    <p>Details</p>
                </div>
                <div className="menu">
                    <p>About Us</p>
                </div>
                <div className="menu">
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="flex ">
                <div className="contact"></div>
                <div className="help flex flex-col">
                    <div className="help">Need help?</div>
                    <div className="help">+987654321</div>
                </div>
            </div>
        </div>
    );
}
