"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./FormField";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const ContactMeForm = () => {
  const t = useTranslations("ContactMe");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        name: z.string().min(1, { message: `${t("name")} ${t("required")}` }),
        email: z
          .string()
          .min(1, { message: "Email is required" })
          .email({ message: "Email is invalid" }),
        phone: z.string().min(1, { message: "Phone is required" }),
        subject: z.string().min(1, { message: "Subject is required" }),
        message: z.string().min(1, { message: "Message is required" }),
      })
    ),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message);
      }

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={`
        flex 
        flex-col 
        gap-5
        border 
        border-gray-600 
        py-6 
        px-9 
        rounded-lg 
        shadow-md 
        hover:shadow-xl 
        transition-shadow 
        max-w-full
        duration-300 
        bg-gray-700/10
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-3 w-full">
        <FormField
          label={t("name")}
          {...register("name")}
          error={errors.name}
        />
        <FormField
          label={t("email")}
          {...register("email")}
          error={errors.email}
        />
      </div>

      <FormField
        label={t("phone")}
        {...register("phone")}
        error={errors.phone}
      />
      <FormField
        label={t("subject")}
        {...register("subject")}
        error={errors.subject}
      />
      <FormField
        label={t("message")}
        {...register("message")}
        error={errors.message}
        isTextarea
      />

      <button
        type="submit"
        className={`
            text-gray-100 
            font-semibold 
            px-3 
            py-2 
            rounded-lg 
            hover:bg-gray-600/20
            transition-colors
            duration-300
            w-full
            mx-auto
            bg-transparent
            border
            border-gray-600
            ${
              isSubmitting &&
              "cursor-not-allowed flex items-center justify-center gap-2"
            }

            md:w-1/4
            md:mx-0
        `}
      >
        {t("send")}
        {isSubmitting && (
          <>
            <svg
              aria-hidden="true"
              className="inline w-5 h-5 animate-spin text-gray-600 fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </>
        )}
      </button>
    </form>
  );
};
