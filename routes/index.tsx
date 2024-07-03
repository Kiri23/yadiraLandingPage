import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import {
  HeroSection,
  MeetTherapistSection,
  ServicesSection,
} from "../components/Sections/index.tsx";
export default function Home() {
  return (
    <div class="flex flex-col pink">
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
  );
}
