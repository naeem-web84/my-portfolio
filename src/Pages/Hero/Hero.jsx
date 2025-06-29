import React from 'react';
import headerImg from '../../assets/image/FB_IMG_1637937956758.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import toast from 'react-hot-toast';

function Hero() {

  const handleSendResume = () => {
    toast.success("Resume downloaded");
  }
  
  return (
    <section className="py-16 px-4 bg-primary text-primary-content">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6">

        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h4 className="text-xl font-bold text-white">Naeem Islam</h4>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
            Full Stack Web Developer
          </h1>
          <p className="text-accent text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I specialize in crafting immersive user experiences using modern frontend technologies. I focus on clean UIs, responsive design, and smooth interactions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/naeem-web84"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-secondary text-white hover:bg-secondary hover:text-black transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/naeem-islam-dv474/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-secondary text-white hover:bg-secondary hover:text-black transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button
                onClick={() => {
                  handleSendResume(); 
                }}
                className="block border border-secondary text-white px-4 py-2 rounded hover:bg-secondary hover:text-black transition"
              >
                Download Resume
              </button>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-accent">Available now</span>
            </div>
          </div>
        </div>

        {/* Right Image Content with angled shape */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-[260px] sm:w-[300px] md:w-[360px] relative overflow-hidden">
            <div className="bg-secondary rounded-[2rem] transform rotate-[3deg] shadow-lg">
              <img
                src={headerImg}
                alt="Naeem Islam"
                className="rounded-[2rem] -rotate-[3deg] scale-[0.98] object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
