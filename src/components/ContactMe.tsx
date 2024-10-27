import { useTranslations } from "next-intl";
import React from "react";
import { IoMail } from "react-icons/io5";
import { ContactMeForm } from "./ContactMeForm";

export const ContactMe = () => {
  const t = useTranslations("ContactMe");
  return (
    <section id="contact" className="section pb-16 md:pb-32">
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <IoMail size={32} /> {t("title")}
      </h2>

      <ContactMeForm />
    </section>
  );
};
