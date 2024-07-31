import './App.css'
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="App">
      <NavBar />      
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
    </>
    
  );
}

export default App;
