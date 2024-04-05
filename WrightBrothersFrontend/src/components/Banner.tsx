import React from "react";
import { Airplane } from "./Airplane"; // Ensure this has a vintage style

const Banner: React.FC = () => {
  return (
    <div className="relative vintage-filter bg-amber-600 h-1/2 mx-auto overflow-hidden flex flex-col justify-center py-24">
      <div className="absolute top-10 left-10">
        <div className="circle shadow-lg pulse-gentle"></div>{" "}
        {/* Sun with pulsing effect */}
      </div>
      <div className="absolute bottom-20 right-20">
        <div className="triangle drift-slow"></div>{" "}
        {/* Triangle with drifting effect */}
      </div>
      <div className="absolute bottom-32 left-32">
        <PropellerSVG /> {/* Propeller with shadow */}
      </div>
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Increased spacing around text */}
        <h1 className="text-5xl leading-none font-bold text-amber-100 mb-4 sm:text-6xl sm:leading-tight">
          Dawn of Aviation
        </h1>
        <p className="mt-6 text-xl leading-8 text-amber-200">
          Journey back to where it all began with the Wright Brothers' historic
          flights.
        </p>
        <div className="mt-8 float-gentle">
          <Airplane />
        </div>
      </div>
    </div>
  );
};

const PropellerSVG = () => (
  <svg
    className="absolute bottom-0 left-20 rotate-slow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100"
    height="100"
  >
    <path
      d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
      fill="#D1D5DB"
    />
  </svg>
);

export default Banner;
