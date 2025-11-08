import React from "react";

export default function CarHeader() {
    return (
        <div className="flex justify-between mx-10">
            <div className="flex flex-col">
                <p className=" font-bold text-5xl">Choose the car that</p>
                <p className=" font-bold text-5xl">suits you</p>
            </div>
            <div className="flex items-end">
                <p className=" font-bold text-xl ">View cars</p>
            </div>
        </div>
    );
}
