import React from "react";
import carSeat from "../../../assets/carSeat.svg";

export default function CardComponent() {
    return (
        <div className="bg-[#FAFAFA] w-104 h-112 rounded-xl mx-10 mt-4">
            <div className="">
                <div className="h-70 w-90">
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between mx-4">
                        <p className="text-2xl">car name</p>
                        <p className="text-2xl">car price</p>
                    </div>
                    <div className="flex mx-4 gap-2">
                        <p className="text-2xl">No of seats</p>
                        <div ><img className="h-8" src={carSeat} alt="carSeat" /></div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#5937E0] h-10 w-80 rounded-xl ">
                            <p className="text-[#ffffff]">View Details</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
