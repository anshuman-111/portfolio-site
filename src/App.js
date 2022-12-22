import About from "./components/About";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Tech from "./components/Tech";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Tech />
      <About />
      <Social />
      <Contact />
    </div>
  )
}

export default App;
