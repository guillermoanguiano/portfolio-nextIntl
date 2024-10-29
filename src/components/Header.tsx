"use client"
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwticher";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("Navigation");
  const navItems = [
    { name: t("experience"), link: "#experience" },
    { name: t("projects"), link: "#projects" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="w-full flex items-center justify-center">
      <div className="flex gap-5 p-5 items-center">
        {navItems.map((item, index) => (
          <Link
            href={item.link}
            className="text-white hover:text-lime-500 font-medium transition"
            key={index}
            onClick={(e) => handleSmoothScroll(e, item.link)}
          >
            {item.name}
          </Link>
        ))}
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export { Header };
