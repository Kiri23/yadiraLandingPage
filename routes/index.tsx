// routes/index.tsx
import { h } from "preact";
import Navbar from "../components/Navbar.tsx";
import { HomeSection, ValuesSection, ServicesSection, MeetTherapistSection } from "../components/Sections/index.tsx";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HomeSection />
      <ValuesSection />
      <ServicesSection />
      <MeetTherapistSection />
    </div>
  );
}
