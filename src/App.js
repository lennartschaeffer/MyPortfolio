import './App.css'
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  return (
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
  );
}

export default App;
