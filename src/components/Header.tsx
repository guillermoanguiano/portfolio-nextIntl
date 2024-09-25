import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwticher";

const Header = () => {
  const t = useTranslations("Navigation");
  const navItems = [
    { name: t("experience"), link: "#experience" },
    { name: t("projects"), link: "#projects" },
  ];

  return (
    <header className="w-full flex items-center justify-center">
      <div className="flex gap-5 p-5 items-center">
        {navItems.map((item, index) => (
          <a
            href={item.link}
            className="text-white hover:text-lime-500 font-medium transition"
            key={index}
          >
            {item.name}
          </a>
        ))}
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export { Header };
