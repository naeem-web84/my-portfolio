import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../../assets/image/FB_IMG_1637937956758.jpg';

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic', // smoother easing globally
    });
  }, []);

  return (
    <section
      id="about"
      className="my-12 px-4 py-12 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left: Static Image */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover border-4 border-[#64DA91]"
          />
        </div>

        {/* Right: Text Only */}
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-1">About Me</h2>
          <p className="text-lg font-semibold mb-4 ml-6">— Who Am I?</p>

          <p className="leading-relaxed text-base md:text-lg max-w-xl">
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
