import { useState } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Merchandise } from "./components/Merchandise";
import { Navigation } from "./components/Navigation";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="size-full bg-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Merchandise />
      <Contact />
    </div>
  );
}
