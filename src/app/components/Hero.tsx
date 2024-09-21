"use client";
import React, { FC } from "react";
import Image from "next/legacy/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="bg-black-500 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-pink-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello! Welcome to my portfolio 
          </h1>
          <h1 className=" mb-4 text-4xl sm:text-2xl lg:text-8xl lg:leading-normal font-extrabold">
            <TypeAnimation
              sequence={[
                "B. Amisha Pai",
                1000,
                "Developer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-300"
            />
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl font-semibold">
           I&apos;m a developer passionate about technology and problem-solving.
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl font-semibold">
              Technovation Grand Summit Winner- 2020, Junior @ Dept of ISE, RVCE.
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
            As an Information Science and Engineering student from Bangalore, India, I am
              deeply committed to leveraging technology to solve real-world problems. With 
                hands-on experience in projects, I have honed 
                  my skills in developing robust solutions using technologies such as{" "}
  <span className="text-pink-500">
    Next.js, Machine Learning, and Arduino UNO
  </span>
  . I have a solid foundation in{" "}
  <span className="text-pink-500">TypeScript, Python and C</span>, and am constantly
  exploring new technologies to expand my expertise. My portfolio showcases a 
  variety of{" "}
  <Link
    href="/#projects"
    className="text-pink-500 hover:text-black hover:bg-pink-500 font-bold px-2 py-2 rounded"
  >
    projects
  </Link>
  that demonstrate my passion for innovation and my ability to adapt to new
  challenges, making me an asset to any team.
</p>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-4 mx-3 my-3 w-full sm:w-fit rounded-full mr-4 bg-pink-500 hover:bg-pink-600 text-black font-bold"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1_f0gL_dQGarRznmtdLZ87BYBJ3ir989E/view?usp=sharing"
              className="px-6 inline-block py-4 mx-3 my-3 w-full sm:w-fit rounded-full mr-4 bg-pink-500 hover:bg-pink-600 text-black font-bold"
            >
              Download CV
            </Link>
            <Link
              href="https://www.linkedin.com/in/amisha-pai/"
              className="px-6 inline-block py-4 mx-3 my-3 w-full sm:w-fit rounded-full mr-4 bg-pink-500 hover:bg-pink-600 text-black font-bold"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gray-700 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/me-wedding.jpeg"
              alt="Profile photo"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
