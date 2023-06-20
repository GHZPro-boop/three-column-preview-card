import React from "react";
import luxuryIcon from "../assets/Assets/images/icon-luxury.svg"
import sedansIcon from "../assets/Assets/images/icon-sedans.svg"
import suvsIcon from "../assets/Assets/images/icon-suvs.svg"

export const ThreeColumnCard = () => {

    return (
        <div className="flex flex-col lg:flex-row text-white mx-auto w-[50%] mt-32 h-80">
            <div className="bg-[#e87e04d8] rounded-l-lg">
                <img src={sedansIcon} alt="Sedans Icon" className="h-6 w-10 mt-8 ml-11" />
                <h3 className="ml-11 mt-6">SEDANS</h3>
                <p className="mt-5 font-thin w-[60%] mx-auto justify-between">Choose a sedan for its affordability and excellent fuel economy. Ideal
                    for cruising in the city or on your next road trip.</p>
                <button className="ml-11 mt-10 hover:bg-blend-hard-light text-orange-500 h-8 w-24">Learn More</button>
            </div>

            <div className="bg-[#147a7a]">
                <img src={suvsIcon} alt="Suvs Icon" className="h-6 w-10 mt-8 ml-11" />
                <h3 className="ml-11 mt-6">SUVS</h3>
                <p className="mt-5 font-thin w-[62%] mx-auto justify-between">Take and SUV for its spacious interior, power, and versatility. Perfect for
                    your next family vacation and off-road adventures.</p>
                <button className="ml-11 mt-10 hover:bg-blend-hard-light text-teal-700 h-8 w-24">Learn More</button>
            </div>

            <div className="bg-[#164d4d] rounded-r-lg">
                <img src={luxuryIcon} alt="Luxury Icon" className="h-6 w-10 mt-8 ml-11" />
                <h3 className="ml-11 mt-6">LUXURY</h3>
                <p className="mt-5 font-thin w-[62%] mx-auto justify-between">Cruise in the best car brands without the bloated prices. Enjoy the
                    enhanced comfort of a luxury rental and arrive in style.</p>
                <button className="ml-11 mt-10 hover:bg-blend-hard-light text-emerald-800 h-8 w-24">Learn More</button>
            </div>
        </div>
    );
}