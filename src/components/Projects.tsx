"use client";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { Reveal } from "./Reveal";
import { projects } from "../data";
import Image from "next/image";

const Projects = () => {
  return (
    <motion.section
      id="hero"
      className="section pb-16 md:pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <FaCode size={32} /> Projects
      </h2>

      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <Reveal key={project.id} width="w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="border flex flex-col lg:flex-row border-gray-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-700/10"
            >
              <Image
                src={project.img}
                alt={`Image of ${project.title}`}
                className="w-full lg:w-1/2 object-cover rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
                width={450}
                height={150}
                quality={90}
                placeholder="blur"
              />
              <div className="py-6 px-9 flex flex-col gap-2">
                <h2 className="text-gray-100 text-2xl flex justify-between font-semibold">
                  {project.title}
                </h2>

                <div className="flex gap-2 items-center flex-wrap">
                  {project.iconLists.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-600 rounded-full"
                    >
                      {<item.icon size={18} />}
                      <span className="text-gray-300 text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <a
                    href={project.link}
                    className="text-gray-300 hover:text-lime-500 font-medium transition ease-in"
                  >
                    See more
                  </a>
                  <span className="text-gray-300 text-sm text-right">
                    {project.createdAt}
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </motion.section>
  );
};

export { Projects };
