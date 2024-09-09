import React, { useState } from "react";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Tushar Verma",
    image: client3,
    text: "At dotspace, we take pride in our unparalleled Digital Marketing Expertise, seamlessly blending creativity with data-driven strategies blending creativity with data-driven strategies",
  },
  {
    id: 2,
    name: "Tushar Verma",
    image: client3,
    text: "At dotspace, we take pride in our unparalleled Digital Marketing Expertise, seamlessly blending creativity with data-driven strategies blending creativity with data-driven strategies",
  },
  {
    id: 3,
    name: "Tushar Verma",
    image: client3,
    text: "At dotspace, we take pride in our unparalleled Digital Marketing Expertise, seamlessly blending creativity with data-driven strategies blending creativity with data-driven strategies",
  },
  // Add more testimonials here...
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h3 className="text-gray-500 text-xl mb-2">Testimonial</h3>
      <h2 className="text-4xl font-bold mb-12">What&apos;s Our client say</h2>

      <div className="relative">
        {/* Client images */}
        <div className="absolute w-full h-full">
          <img
            src={client1}
            alt="Client 1"
            className="absolute w-16 h-16 rounded-full left-0 top-0"
          />
          <img
            src={client2}
            alt="Client 2"
            className="absolute w-16 h-16 rounded-full left-1/4 top-1/4"
          />
          <img
            src={client3}
            alt="Client 3"
            className="absolute w-16 h-16 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-[0px_4px_4px_0px_#00000040]"
          />
          <img
            src={client4}
            alt="Client 4"
            className="absolute w-16 h-16 rounded-full right-1/4 top-1/4"
          />
          <img
            src={client5}
            alt="Client 5"
            className="absolute w-16 h-16 rounded-full right-0 top-0"
          />
        </div>

        {/* Main testimonial */}
        <div className="mb-8">
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            className="w-24 h-24 rounded-full mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {testimonials[currentTestimonial].text}
          </p>
          <h4 className="text-xl font-semibold">
            {testimonials[currentTestimonial].name}
          </h4>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentTestimonial ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
