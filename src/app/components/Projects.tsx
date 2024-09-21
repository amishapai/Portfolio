"use client";
import React, { useState, useRef, FC } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/legacy/image";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  tag: string[];
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    name: "WIPOD-Dashboard",
    description:
      "India’s first-ever autonomous car initiative, a collaboration between Coding Club RVCE, WIPRO, and IISc. Project to build it's robust dashboard.",
    image: "/proj/Wirin.png",
    link: "https://github.com/AlroyYT/Car",
    tag: ["All", "Software"],
  },
  {
    id: 2,
    name: "EcoSensor Connect",
    description:
      "Created a portable air quality sensor using NodeMCU.Data is transferred to ThingSpeak for visualization and to MATLAB for trend analysis using machine learning algorithms.",
    image: "/proj/Eco.png",
    link: "https://github.com/amishapai/EcoSensorConnect",
    tag: ["All", "Hardware"],
  },
  {
    id: 3,
    name: "Ink & Insights",
    description:
      "A python ML model, that analyses NSO's literacy survery from 2012-2018 and predict the factors that affect literacy and predict the literacy rate in the upcoming years.",
    image: "/proj/image.png",
    link: "https://github.com/amishapai/InkAndInsights",
    tag: ["All", "Software"],
  },
  {
    id: 4,
    name: "Asclepius",
    description:
      "A website that uses a dataset of COVID cases to develop a risk factor for an individual who enters their personal health details and locality using machine learning algorithms for personalized results. Implemented data visualization techniques including heatmaps and graphs for enhanced analysis.",
    image: "/proj/Aclepius.png",
    link: "https://github.com/amishapai/Asclepius",
    tag: ["All", "Software"],
  },
  {
    id: 5,
    name: "Zesha",
    description:
      "An app that helps both Alzheimer’s patients and their caretakers by providing a digital caretaker. Its features include the ability to listen to and answer repetitive questions from users using Dialogflow, patient GPS tracking, helpful daily checklists, quick-dial emergency numbers, and links to entertainment sites to help patients cope with boredom.",
    image: "/proj/Zesha.png",
    link: "https://www.technovation.org/blogs/technovation-awards-winners-world-summit-2020/",
    tag: ["All", "Software"],
  },
];

const Projects: FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" className="py-12 px-4 bg-black text-gray-200">
      <h2 className="text-4xl mb-8 text-center font-semibold">
        Projects and Publications
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button
          onClick={() => handleTagChange("All")}
          className={`px-3 py-2 rounded-md text-base font-lg lg:text-2xl ${
            tag === "All"
              ? "text-black bg-pink-500"
              : "text-pink-500 bg-black"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleTagChange("Software")}
          className={`px-3 py-2 rounded-md text-base font-lg lg:text-2xl ${
            tag === "Software"
              ? "text-black bg-pink-500"
              : "text-pink-500 bg-black"
          }`}
        >
          Software
        </button>
        <button
          onClick={() => handleTagChange("Hardware")}
          className={`px-3 py-2 rounded-md text-base font-lg lg:text-2xl ${
            tag === "Hardware"
              ? "text-black bg-pink-500"
              : "text-pink-500 bg-black"
          }`}
        >
          Hardware
        </button>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                className="w-full h-56 object-cover"
                src={project.image}
                alt={project.name}
                width={500} // Example width, adjust as needed
                height={300} // Example height, adjust as needed
                //layout="full" // Maintains aspect ratio
              />
              <div className="p-6 bg-gray-800">
                <h2 className="text-2xl font-bold mb-2 text-pink-500">
                  {project.name}
                </h2>
                <p className="text-gray-300 text-lg lg:text-xl">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-pink-500 hover:underline"
                  >
                    Click Me to Explore !
                  </a>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
