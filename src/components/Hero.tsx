"use client";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import meImg from "@/assets/me.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <motion.section
      id="hero"
      className="py-16 md:py-32 section"
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl flex flex-col items-center md:items-start">
        <div className="flex gap-4 b-4">
          <div>
            <Image
              src={meImg}
              alt="picture of me"
              className="rounded-full shadow-lg w-[6.5rem] h-28 object-cover"
              width={100}
              height={100}
              quality={90}
              priority
              placeholder="blur"
            />
          </div>
          <a
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
          </a>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mt-3">
          Guillermo Anguiano
        </h1>
        <p className="mt-6 text-xl [&>strong]:font-semibold text-gray-300">
          <strong>{t("description.strong")}</strong> {t("description.rest")}
        </p>
        <nav className="mt-4 flex gap-4">
          <a className="hero-btn" href="mailto:jguillermoang@gmail.com">
            <CiMail className="w-5 h-5" />
            <span>{t("contact")}</span>
          </a>
          <a className="hero-btn" href="https://linkedin.com/in/guille128">
            <CiLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </motion.section>
  );
};

export { Hero };
