import gastosPassa from "@/assets/gastosPassa.webp";
import supervizza from "@/assets/supervizza.webp";
import { DiMeteorfull, DiMsqlServer } from "react-icons/di";
import { FaBootstrap, FaCode, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { useTranslations } from "next-intl";
import { ProjectsDescription } from "./ProjectsDescription";
import { TIcon } from "@/types";

const Projects = () => {
  const t = useTranslations("Projects");

  // Claves para los proyectos
  const keys = ["passa", "supervizza"] as const;

  // Mapeo dinámico de los proyectos
  const projects = keys.map((key, index) => ({
    id: index + 1,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    img: key === "passa" ? gastosPassa : supervizza,
    iconList: [
      { icon: <DiMeteorfull />, name: "Meteor.js" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiMongodb />, name: "MongoDB" },
      key === "passa" && { icon: <DiMsqlServer />, name: "SQL Server" },
    ].filter(Boolean) as TIcon[],
    link: t(`${key}.link`),
    createdAt: t(`${key}.createdAt`),
  }));

  return (
    <section id="projects" className="section pb-16 md:pb-32">
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <FaCode size={32} /> Projects
      </h2>

      <ProjectsDescription projects={projects} />
    </section>
  );
};

export { Projects };
