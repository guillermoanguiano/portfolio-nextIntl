'use client';
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { experience } from "@/data";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <MdWork size={32} /> Experience
      </h2>

      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experience.map((experience, index) => (
          <Reveal key={index} width="w-full">
            <div className="border border-gray-600 py-6 px-9 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-700/10">
              <h2 className="text-gray-100 text-2xl flex justify-between font-semibold">
                {experience.company}
                <span className="text-gray-300 text-sm text-right">
                  {experience.period}
                </span>
              </h2>
              <div className="flex justify-between items-center mt-3">
                <p>
                  {experience.description.map((description, index) => (
                    <span
                      key={index}
                      className="text-gray-400 mt-4 text-pretty list-item w-[90%]"
                    >
                      {description}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </motion.section>
  );
};

export { Experience };
