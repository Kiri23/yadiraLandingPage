import { Handlers, PageProps } from "$fresh/server.ts";

import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import Navbar2 from "../components/Navbar2.tsx";

import {
  FaqSection,
  FollowUsSection,
  HeroSection,
  HeroSection2,
  HeroSection3,
  MeetTherapistSection,
  ServicesSection,
  ServicesSection2,
  ServicesSection3,
} from "../components/Sections/index.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const version = url.searchParams.get("version") || "2";
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
            <main class=" px-4 flex-1">
              <section id="hero" class="w-full">
                <HeroSection />
              </section>
              <section id="services" class="w-full py-12">
                <ServicesSection2 />
              </section>
              <section id="meetMe" class="w-full">
                <MeetTherapistSection />
              </section>
              <section id="faq" class={"w-full"}>
                <FaqSection />
              </section>
              <section id="Follow us" class={"w-full"}>
                <FollowUsSection />
              </section>
            </main>
            <Footer />
          </div>
        </>
      );
    case "3":
      return (
        <>
          <div class="flex flex-col">
            <Navbar />
            <main class="flex-1">
              <section id="hero" class="w-full">
                <HeroSection2 />
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
    case "4":
      return (
        <>
          <div class="flex flex-col bg-cremita">
            <Navbar2 />
            <main class="flex-1">
              <section
                id="hero"
                class="w-full border-b-brownBrand border-b-2"
              >
                <HeroSection3 />
              </section>
              <section id="services" class="w-full py-8">
                <ServicesSection3 />
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
