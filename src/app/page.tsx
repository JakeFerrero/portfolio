'use client';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Home from './components/home/home';
import Projects from './components/projects/projects';

export default function Root() {
  return (
    <div>
      <section id="home">
        <div className="contentContainer">
          <Home />
        </div>
      </section>
      <section id="about">
        <div className="contentContainer">
          <About />
        </div>
      </section>
      <section id="experience">
        <div className="contentContainer">
          <Experience />
        </div>
      </section>
      <section id="projects">
        <div className='contentContainer'>
          <Projects />
        </div>
      </section>
      <section id="contact">
        <div className="contentContainer">
          <Contact />
        </div>
      </section>
    </div>
  );
}
