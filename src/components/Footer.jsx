import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footerBackground from "../assets/footerbackground.jpg";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src={logo} alt="dotspace" className="h-12 mb-4 invert" />
            <p className="mt-4 text-sm">
              The essential to combine empathy creativity and effientant to meet
              user needs and business success The essential to combine empathy
              and effientant to meet user needs and business success.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Home", "About us", "Services", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-orange-400">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Career",
                "Refund Policy",
                "Live Chat",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>📞 1234567890</li>
              <li>✉️ dotspacetech@gmail.com</li>
              <li>📍 Behind Puno, Jaipur</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-400 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-navy-blue mb-2 md:mb-0">
            ©2023 dotspace Technologies. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-navy-blue">Follow Us at</span>
            <FaLinkedin className="text-navy-blue" />
            <FaInstagram className="text-navy-blue" />
            <FaFacebookF className="text-navy-blue" />
            <FaTwitter className="text-navy-blue" />
            <FaYoutube className="text-navy-blue" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
