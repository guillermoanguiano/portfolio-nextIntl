import { MdWork } from "react-icons/md";
import { ExperienceDescription } from "./ExperienceDescription";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("Experience");
  const keys = ["freelancer", "calzzapato"] as const;

  const experience = keys.map((key) => ({
    company: `${t(`${key}.position`)} - ${t(`${key}.company`)}`,
    period: t(`${key}.period`),
    description: [
      t(`${key}.description1`),
      t(`${key}.description2`),
      t(`${key}.description3`),
    ],
  }));

  return (
    <section id="experience" className="section">
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <MdWork size={32} /> Experience
      </h2>

      <ExperienceDescription experience={experience} />
    </section>
  );
};

export { Experience };
