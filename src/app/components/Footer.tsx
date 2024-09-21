"use client";
import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="footer border z-10 border-t-gray-600 border-l-transparent border-r-transparent bg-black-500 text-white">
      <div className="container p-12 flex justify-between">
        <span>
          Contact Me<span className="mx-2"> </span>
          <a
            href="mailto:amisha.b.pai@gmail.com"
            className="text-pink-500 hover:text-black hover:bg-pink-500  px-1 py-1 rounded"
          >
            amisha.b.pai@gmail.com
          </a>
          <span className="mx-2"> </span>
          <a
            href="tel:+919535401872"
            className="text-pink-500 hover:text-black hover:bg-pink-500  px-1 py-1 rounded"
          >
            +91 9535401872
          </a>
        </span>
        <p className="text-gray-300"> That's it :))</p>
      </div>
    </footer>
  );
};

export default Footer;
