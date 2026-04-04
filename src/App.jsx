import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import MouseBubbles from "./components/MouseBubbles";

function App() {
  const x = useMotionValue(50); // start in center (%)
  const y = useMotionValue(50);

  return (
    <div className="">
      <div className="fixed inset-0 -z-10">
        <Background />
      </div>

      {/* Mouse bubbles */}
      {/* <div className="absolute inset-0 z-0">
        <MouseBubbles />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
