"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { IExperience } from "@/types";

type Props = {
  experience: IExperience[];
};

export const ExperienceDescription = ({ experience }: Props) => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {experience.map((exp, index) => (
        <Reveal key={index} width="w-full">
          <div className="border border-gray-600 py-6 px-9 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-700/10">
            <h2 className="text-gray-100 text-2xl flex justify-between font-semibold">
              {exp.company}
              <span className="text-gray-300 text-sm">{exp.period}</span>
            </h2>
            <ul className="text-gray-400 mt-4 space-y-2 list-inside list-disc">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </motion.div>
  );
};
