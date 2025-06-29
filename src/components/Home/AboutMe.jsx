import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../../assets/image/FB_IMG_1637937956758.jpg';

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="my-12 px-4 py-8 bg-primary text-primary-content"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left: Static Image */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Right: Text Only */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-0">About Me</h2>
          <p className="text-lg font-medium text-secondary mb-2 ml-8">— Who Am I?</p>

          <p className="text-white leading-relaxed text-base md:text-lg mb-6">
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
