import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
// import Blog from "./components/Blog";
import { Toaster } from "sonner";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

export default App;
