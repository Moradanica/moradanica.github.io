import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import About from "./pages/About";
import MouseBubbles from "./components/MouseBubbles";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/skills", element: <Skills /> }, {
    path: "/about", element: <About />
  }, { path: "/contact", element: <Contact /> }
]);

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

{/* <RouterProvider router={router} /> */}
      <div className="md:relative z-10">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
