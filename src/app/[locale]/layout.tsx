import { Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LayoutMetadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn(montserrat.className)}>
        <NextIntlClientProvider messages={messages}>
          <div className="app-container items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={cn(
                  `
                  [--aurora:linear-gradient(135deg,var(--blue-400)_20%,var(--violet-300)_60%)]
                  [background-image:var(--aurora)]
                  [background-size:150%]
                  [background-position:50%_50%]
                  filter blur-[8px]
                  after:content-[""] after:absolute after:inset-0 
                  after:[background-image:var(--aurora)]
                  after:animate-aurora after:[background-attachment:fixed] 
                  pointer-events-none
                  absolute -inset-[5px] opacity-40 will-change-transform 
                  [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]
                  `
                )}
              ></div>
            </div>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
