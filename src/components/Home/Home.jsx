import React from 'react';
import Hero from '../../Pages/Hero/Hero';
import AboutMe from './AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import ContactCard from './LetsDiscuss/ContactCard';

const Home = () => {
  return (
    <div>
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>
      <div className="border border-secondary"></div>

      <section id="about" className="scroll-mt-20">
        <AboutMe />
      </section>
      <div className="border border-secondary"></div>

      <section id="skills" className="scroll-mt-18">
        <Skills />
      </section>
      <div className="border border-secondary"></div>

      <section id="projects" className="scroll-mt-18">
        <Projects />
      </section>
      <div className="border border-secondary"></div>

      <section id="contact" className="scroll-mt-18">
        <ContactCard />
      </section>
    </div>
  );
};

export default Home;
