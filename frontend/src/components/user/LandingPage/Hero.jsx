import React from "react";
import carImg from "../../../assets/carImg.svg";
import Tyre from "../../../assets/Tyre.svg";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-xl w-350 h-150 mx-10 relative flex items-center  px-18 bg-[#5937E0]">
        <div className="absolute right-0">
          <img src={carImg} alt="carImg" />
        </div>
        <div className="absolute z-10 left-10 -top-16 ">
          <img src={Tyre} alt="tyreImg" />
        </div>
        <div></div>
        <div className="h-full flex flex-col  justify-center">
          <div className="flex flex-col gap-3">
            <p className="text-[#FFFFFF] text-4xl font-bold ">
            Experience the road
          </p>
          <p className="text-[#FFFFFF] text-4xl font-bold ">like never before</p>
          </div>
          
          {/* <div>
            <p className="text-[#FFFFFF] mt-4">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </p>
          </div> */}
          <div className="z-30">
            <button className="text-[#FFFFFF] mt-4 bg-[#FF9E0C] h-10 w-36 rounded-xl cursor-pointer">View all cars</button>
          </div>
        </div>
      </div>
    </div>
  );
}
