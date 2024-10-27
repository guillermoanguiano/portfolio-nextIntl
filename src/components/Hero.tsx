"use client";
import { CiLinkedin, CiMail } from "react-icons/ci";
import meImg from "@/assets/me.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="py-16 md:py-32 section">
      <div
        className={`
          max-w-xl
          flex 
          flex-col 
          items-center 

          md:max-w-full 
          md:items-start
          
          max-md:text-center 
        `}
      >
        <div className="flex flex-col items-center gap-4 b-4 md:flex-row">
          <div>
            <Image
              src={meImg}
              alt="picture of me"
              className={`
                rounded-full 
                shadow-lg 
                w-[6.5rem] 
                object-cover
                h-28 
              `}
              width={100}
              height={100}
              quality={90}
              priority
              placeholder="blur"
            />
          </div>
          <Link
            href="https://linkedin.com/in/guille128"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <div className="flex items-center ">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="spin-gradient"></span>
                <div className="available-badge">{t("badge")}</div>
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mt-3">
            Guillermo Anguiano
          </h1>
          <p className="mt-6 text-xl [&>strong]:font-semibold text-gray-300">
            <strong>{t("description.strong")}</strong> {t("description.rest")}
          </p>
          <nav className="mt-4 flex gap-4">
            <Link className="hero-btn" href="#contact">
              <CiMail className="w-5 h-5" />
              <span>{t("contact")}</span>
            </Link>
            <Link
              className="hero-btn"
              href="https://linkedin.com/in/guille128"
              target="_blank"
            >
              <CiLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export { Hero };
