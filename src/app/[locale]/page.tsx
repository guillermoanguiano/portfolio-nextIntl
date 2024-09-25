import { Experience, Header, Hero, Projects } from "@/components";

export default function Home() {
  return (
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
  );
}
