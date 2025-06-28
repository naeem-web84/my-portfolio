import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Player } from '@lottiefiles/react-lottie-player';
import lottieAnimation from '../../assets/lottie/Animation - 1751141421232.json';

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="my-8 relative border-t border-t-accent">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

        {/* Lottie animation on top-left */}
        <div
          data-aos="fade-right"
          className="w-40 self-start"
          style={{ maxWidth: '160px' }}
        >
          <Player
            autoplay
            loop
            src={lottieAnimation}
            style={{ height: '160px', width: '160px' }}
          />
        </div>

        {/* Text content below Lottie with 2s delay and slide-in from right */}
        <div
          data-aos="fade-right"
          data-aos-delay="2000"
          className="lg:text-left mt-[-40px] opacity-0 translate-x-10"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
        >
          <p className="text-lg text-accent font-medium mb-6">— Who I Am?</p>

          <p className="leading-relaxed">
            Hi, I’m <span className="font-semibold">Naeem</span>.  
            I’ve had a deep interest in web development for years and eventually committed to learning — starting what became the most challenging and rewarding journey of my life.  
            <br /><br />
            My goal is to build meaningful digital experiences through clean, thoughtful design and efficient frontend development. I approach every project with focus: research, plan, build, refine.
            <br /><br />
            I love working with teams and believe collaboration sharpens both creativity and leadership. If you're looking to bring ideas to life with someone dedicated and user-focused — let’s connect!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
