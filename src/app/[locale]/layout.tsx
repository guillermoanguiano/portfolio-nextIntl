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
                    absolute 
                    inset-0 
                    bg-gradient-to-br 
                    from-blue-300 
                    to-violet-500 
                    bg-[length:120%] 
                    bg-center 
                    opacity-50 
                    blur-[5px] 
                    [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)] 
                    pointer-events-none
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
