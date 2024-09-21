"use client";
import React, { useState, FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact: FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative bg-black"
    >
      <div className="hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-3xl font-bold text-pink-500 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-300 text-semibold-lg lg:text-xl mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/amishapai">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-10 w-10 text-pink-500"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/amisha-pai/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-10 w-10 text-pink-500"
            />
          </Link>
        </div>
      </div>
</section>
  );
};

export default Contact;
