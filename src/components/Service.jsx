import React from "react";

import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";
import ClientSection from "./ClientSection";
import KeyAspects from "./KeyAspects";

const ExpertiseCard = ({ icon, title, description, bgColor, isFirst }) => (
  <div
    className={`
    w-[335px] h-[185px] 
    p-[25px] 
    ${isFirst ? "rounded-tl-[10px]" : "rounded-lg"}
    ${bgColor} 
    transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg
    flex flex-col
  `}
  >
    <div className="flex flex-col items-start mb-2">
      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold w-[165px] h-[34px] leading-tight">
        {title}
      </h3>
    </div>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

const Service = () => {
  const expertiseItems = [
    {
      icon: Icon5,
      title: "Corporate Identity",
      bgColor: "bg-blue-50",
    },
    { icon: Icon6, title: "UI/UX Design", bgColor: "bg-red-50" },
    { icon: Icon4, title: "Media Strategy", bgColor: "bg-blue-50" },
    {
      icon: Icon3,
      title: "Brand Promotion",
      bgColor: "bg-blue-50",
    },
    {
      icon: Icon2,
      title: "Full Development",
      bgColor: "bg-red-50",
    },
    { icon: Icon1, title: "Photo & Print", bgColor: "bg-blue-50" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Our expertise with you</h2>
          <p className="text-gray-600 max-w-2xl">
            At dotspace, we take pride in our unparalleled Digital Marketing
            Expertise, seamlessly blending creativity with data-driven.
          </p>
        </div>
        <button className="px-6 py-2 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-colors">
          Explore
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, index) => (
          <ExpertiseCard
            key={index}
            icon={item.icon}
            title={item.title}
            description="At dotspace, we take pride in our unparalleled Digital Marketing Expertise."
            bgColor={item.bgColor}
            isFirst={index === 0}
          />
        ))}
      </div>
      <ClientSection />
      <div>
        <KeyAspects />
      </div>
    </div>
  );
};

export default Service;
