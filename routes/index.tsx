import { Handlers, PageProps } from "$fresh/server.ts";

import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import {
  HeroSection,
  MeetTherapistSection,
  ServicesSection,
  ServicesSection2,
} from "../components/Sections/index.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const version = url.searchParams.get("version") || "1";
    return ctx.render({ version });
  },
};

export default function Home({ data }: PageProps<{ version: string }>) {
  const { version } = data;
  return versioningPage(version);
}

const versioningPage = (version: string) => {
  switch (version) {
    case "1":
      return (
        <>
          <div class="flex flex-col">
            <Navbar />
            <main class="flex-1">
              <section id="hero" class="w-full">
                <HeroSection />
              </section>
              <section id="services" class="w-full py-12">
                <ServicesSection />
              </section>
              <section id="meetMe" class="w-full">
                <MeetTherapistSection />
              </section>
            </main>
            <Footer />
          </div>
        </>
      );
    case "2":
      return (
        <>
          <div class="flex flex-col">
            <Navbar />
            <main class="flex-1">
              <section id="hero" class="w-full">
                <HeroSection />
              </section>
              <section id="services" class="w-full py-12">
                <ServicesSection2 />
              </section>
              <section id="meetMe" class="w-full">
                <MeetTherapistSection />
              </section>
            </main>
            <Footer />
          </div>
        </>
      );
  }
};
