// routes/index.tsx
// /** @jsx h */ this lime remove the red lines in the editor
import { h } from "preact";
import Navbar from "../components/Navbars.tsx";
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
