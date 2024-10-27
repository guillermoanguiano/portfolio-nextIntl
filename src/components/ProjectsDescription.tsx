"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import Image from "next/image";
import { IProject } from "@/types";
import Link from "next/link";

type Props = {
  projects: IProject[];
};

export const ProjectsDescription = ({ projects }: Props) => {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {projects.map((project) => (
        <Reveal key={project.id} width="w-full">
          <div className="border flex flex-col lg:flex-row border-gray-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-700/10">
            <Image
              src={project.img}
              alt={`Image of ${project.title}`}
              className="w-full lg:w-1/2 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              width={450}
              height={150}
              quality={90}
              placeholder="blur"
            />
            <div className="py-6 px-9 flex flex-col gap-3">
              <h2 className="text-gray-100 text-2xl font-semibold">
                {project.title}
              </h2>

              <div className="flex gap-2 items-center flex-wrap">
                {project.iconList.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-600/20 rounded-full"
                  >
                    {item.icon}
                    <span className="text-gray-300 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 text-sm">{project.description}</p>

              <div className="flex justify-between items-center mt-3">
                {project.link ? (
                  <Link
                    href={project.link}
                    className="text-gray-300 hover:text-lime-500 font-medium transition ease-in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See more
                  </Link>
                ) : (
                  <span className="text-gray-300 text-xs transition ease-in font-medium">
                    {project.internal}
                  </span>
                )}
                <span className="text-gray-300 text-sm">
                  {project.createdAt}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </motion.div>
  );
};
