import React from "react";
import carIcon from "../../../assets/carIcon.svg"
import phone from "../../../assets/phone.svg"

export default function () {
    return (
        <div className="flex justify-between mx-8 my-4 z-30">
            <div className="flex">
                <div></div>
                <div className="flex gap-2">
                    <div className="h-6 w-10"><img  src={carIcon} alt="carIcon" /></div>
                    <p className="text-2xl">Car Rental</p>
                </div>
            </div>
            <div className="flex gap-10 z-30">
                <div className="menu">
                    <p className=" text-xl hover:font-medium cursor-pointer" >Home</p>
                </div>
                <div className="menu  ">
                    <p className=" text-xl hover:font-medium cursor-pointer">Vehicles</p>
                </div>
                <div className="menu  ">
                    <p className=" text-xl hover:font-medium cursor-pointer">Details</p>
                </div>
                <div className="menu ">
                    <p className=" text-xl  hover:font-medium cursor-pointer">About Us</p>
                </div>
                <div className="menu">
                    <p className=" text-xl font-light  hover:font-medium cursor-pointer">Contact Us</p>
                </div>
            </div>
            <div className="flex ">
                <div className="contact"></div>
                <div className="help flex gap-2  cursor-pointer ">
                    <div className="flex items-center  "><img src={phone} alt="" /></div>
                    <div className="flex flex-col ">
                        
                    <div className="help ">Need help?</div>
                    <div className="help">+987654321</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
