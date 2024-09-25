import { Experience, Header, Hero, Projects } from "@/components";
import { AuroraBackground } from "@/components/ui";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="relative">
        <Header />

        <main>
          <Hero />

          <div className="space-y-24">
            <Experience />
            <Projects />
          </div>
        </main>
      </div>
    </AuroraBackground>
  );
}
