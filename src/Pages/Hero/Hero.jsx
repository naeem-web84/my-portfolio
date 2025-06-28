import React from 'react';
import headerImg from '../../assets/image/FB_IMG_1637937956758.jpg';

function Hero() {
  return (
    <section className="my-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-secondary">Naeem Islam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Frontend Developer & UI Designer
          </h2>
          <p className="text-accent max-w-lg mx-auto lg:mx-0">
            I design and build modern, fast, and accessible websites with clean UI and smooth interactions.
          </p>
          <a
            href="/Naeem_Resume.pdf"
            className="btn bg-secondary text-primary hover:bg-secondary hover:text-secondary-content border-none px-6 py-3 rounded-lg transition duration-300"
            download
          >
            Download Resume
          </a>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-1 flex justify-center">
          <img
            src={headerImg}
            alt="Naeem"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-accent"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
