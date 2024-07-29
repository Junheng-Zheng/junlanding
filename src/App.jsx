import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar"
import { Hero } from "./Components/Hero/Hero"
import { About } from "./About"
import { Projects } from "./Components/Projects/Projects"
import { Contact } from "./Components/Contact/Contact"


function App() {
  return <div className={styles.App}>
        <Navbar />
        <Hero />
            <About />
            <Projects />
            <Contact />
    </div>;
}

export default App
