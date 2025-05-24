import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./pages/home/Hero";
import YCButton from "./components/ui/YCButton";
import { ReactLenis } from "lenis/react";
import Video from "./pages/home/Video";
import Section3 from "./pages/home/Section3";
import Section4 from "./pages/home/Section4";
import Section5 from "./pages/home/Section5";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <>
     
      <div className="bg-[#fbf5f4] w-full min-h-screen scrollbar-hide">
      <ReactLenis root />
        {/* Navbar */}
        <Navbar />

        {/* YCButton */}
        <YCButton />

        {/* Hero Section */}
        <Hero />

        {/* Video Section */}
        <Video />

        {/* Section 3 */}
        <Section3 />

        {/* Section 4 */}
        <Section4 />

        {/* Section 5 */}
        <Section5 />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
