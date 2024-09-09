import React from "react";
import personImage from "../assets/person-with-laptop.jpg"; // Add this image to your assets
import caseStudy1 from "../assets/case-study-1.jpg"; // Add these images to your assets
import caseStudy2 from "../assets/case-study-2.jpg";
import caseStudy3 from "../assets/case-study-3.jpg";
import caseStudy4 from "../assets/case-study-4.jpg";
import caseStudy5 from "../assets/case-study-5.jpg";

const CaseStudyCard = ({ image, title, className }) => (
  <div
    className={`relative overflow-hidden rounded-lg group mx-auto ${className}`}
    style={{ background: "#BEE1BE" }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
      <div className="flex justify-between items-center w-full text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
);

const CaseStudies = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-5xl font-bold mb-4">Our Case Studies</h2>
          <p className="text-gray-600 max-w-2xl">
            At dotspace, we take pride in our unparalleled Digital Marketing
            Expertise, seamlessly blending creativity with data-driven
            strategies to propel.
          </p>
        </div>
        <button className="px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-colors text-lg font-semibold">
          Explore
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 relative rounded-2xl overflow-hidden h-[500px]">
          <img
            src={personImage}
            alt="Person with laptop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-100/50 to-blue-900/50" />
          <div className="absolute top-6 right-6 bg-orange-400 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-6 grid-rows-6 gap-6 h-[500px]">
          <CaseStudyCard
            image={caseStudy1}
            title="Case Study - 1"
            className="col-span-4 row-span-3"
          />
          <CaseStudyCard
            image={caseStudy2}
            title="Case Study - 2"
            className="col-span-2 row-span-3"
          />
          <CaseStudyCard
            image={caseStudy3}
            title="Case Study - 3"
            className="col-span-3 row-span-3"
          />
          <CaseStudyCard
            image={caseStudy4}
            title="Case Study - 4"
            className="col-span-2 row-span-3"
          />
          <CaseStudyCard
            image={caseStudy5}
            title="Case Study - 5"
            className="col-span-1 row-span-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
