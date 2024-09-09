import React from "react";
// Make sure to add this logo to your assets
import newlogo from "../assets/newlogo.png";

const ClientSection = () => {
  return (
    <div className="bg-[#00205B] rounded-lg py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-white text-center text-xl mb-8 py-2 px-6 border border-white rounded-full inline-block">
            Client we have work with
          </h2>
        </div>
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((item) => (
            <img
              key={item}
              src={newlogo}
              alt="dotspace"
              className="w-32 opacity-50"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
