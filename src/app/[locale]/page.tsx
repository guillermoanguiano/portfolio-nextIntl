import { ContactMe, Experience, Header, Hero, Projects } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="relative">
      <Header />

      <main>
        <Hero />

        <div className="space-y-24">
          <Experience />
          <Projects />
          <ContactMe />
        </div>
      </main>
    </div>
  );
}
