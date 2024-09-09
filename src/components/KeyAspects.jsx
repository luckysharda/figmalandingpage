import React from "react";
import collaborativeIcon from "../assets/collaborative-icon.png"; // Make sure to add this icon to your assets
import person from "../assets/person.png";

const KeyAspects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Our Key Aspects</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        At dotspace, we take pride in our unparalleled Digital Marketing
        Expertise, seamlessly blending creativity with data-driven strategies to
        propel.
      </p>
      <div className="flex justify-center mb-12">
        <button className="px-6 py-2 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-colors">
          About Us
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-blue-50 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <img
              src={collaborativeIcon}
              alt="Collaborative"
              className="w-8 h-8 mr-4"
            />
            <h3 className="text-xl font-semibold">Collaborative Approach</h3>
          </div>
          <p className="text-gray-600 mb-8">
            At dotspace, we take pride in our unparalleled Digital Marketing
            Expertise, seamlessly blending creativity with data-driven.
          </p>
          <div className="flex items-center mb-4">
            <img
              src={collaborativeIcon}
              alt="Collaborative"
              className="w-8 h-8 mr-4"
            />
            <h3 className="text-xl font-semibold">Collaborative Approach</h3>
          </div>
          <p className="text-gray-600">
            At dotspace, we take pride in our unparalleled Digital Marketing
            Expertise, seamlessly blending creativity with data-driven.
          </p>
        </div>
        <div className="flex-1 bg-blue-50 rounded-lg p-8 relative overflow-hidden">
          <h3 className="text-xl font-semibold mb-4">Collaborative Approach</h3>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 mb-8">
              At dotspace, we take pride in our unparalleled Digital Marketing
              Expertise, seamlessly.
            </p>
          </div>

          <div className="space-y-4 flex flex-col">
            <div className="bg-white rounded-full py-2 px-4 w-max">
              500+ client serves
            </div>
            <div className="bg-white rounded-full py-2 px-4 w-max">
              5+ Year Experience
            </div>
            <div className="bg-white rounded-full py-2 px-4 w-max">
              5+ Year Experience
            </div>
          </div>
          <img
            src={person}
            alt="Team member"
            className="absolute bottom-0 right-0 w-1/2 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default KeyAspects;
