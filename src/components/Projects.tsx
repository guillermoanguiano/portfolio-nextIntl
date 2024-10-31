import gastosPassa from "@/assets/gastosPassa.webp";
import bydPremier from "@/assets/byd-page.png";
import { DiMeteorfull, DiMsqlServer } from "react-icons/di";
import { FaBootstrap, FaCode, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { useTranslations } from "next-intl";
import { ProjectsDescription } from "./ProjectsDescription";
import { TIcon } from "@/types";
import { RiNextjsFill } from "react-icons/ri";
import { StaticImageData } from "next/image";

const Projects = () => {
  const t = useTranslations("Projects");
  const keys = ["bydPremier", "passa"] as const;

  const projects = keys.map((key, index) => {
    const iconList =
      key === "passa"
        ? [
            { icon: <DiMeteorfull />, name: "Meteor.js" },
            { icon: <FaReact />, name: "React" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <DiMsqlServer />, name: "SQL Server" },
          ]
        : key === "bydPremier" && [
            { icon: <RiNextjsFill />, name: "Next.js" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiTailwindcss />, name: "TailwindCSS" },
          ];

    let img: StaticImageData = gastosPassa;

    if (key === "bydPremier") {
      img = bydPremier;
    }

    return {
      id: index + 1,
      title: t(`${key}.title`),
      description: t(`${key}.description`),
      img,
      iconList: iconList as TIcon[],
      link: t(`${key}.link`),
      createdAt: t(`${key}.createdAt`),
      internal: t(`${key}.internal`),
    };
  });

  return (
    <section id="projects" className="section pb-16">
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <FaCode size={32} /> {t("title")}
      </h2>

      <ProjectsDescription projects={projects} />
    </section>
  );
};

export { Projects };
