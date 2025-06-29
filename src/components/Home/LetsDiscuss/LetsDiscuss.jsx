import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";

function LetsDiscuss() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleBack = () => {
    navigate(-1); // go back one page in history
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for knocking! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-primary text-white font-urbanist">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-around gap-12 items-start">

        {/* Left side: Contact Info */}
        <div className="md:col-span-1 lg:border-r lg:border-r-secondary pr-2" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Contact</h2>
          <p className="text-accent mb-6">
            I’m always open to discuss your ideas or work together on something great.
          </p>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-4">
              <FiPhone className="text-2xl text-secondary" />
              <span>+880 1712 499 084</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-2xl text-secondary" />
              <span>naeemislam.hasan74@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMessageSquare className="text-2xl text-secondary" />
              <span>WhatsApp: +880 1538 390 0084</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-2xl text-secondary" />
              <span>Rangpur, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="md:col-span-1" data-aos="fade-up">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md mx-auto w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-md bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary resize-none transition"
              required
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="border border-secondary text-secondary hover:bg-secondary hover:text-black px-8 py-3 rounded-md transition w-max"
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="border border-gray-500 text-gray-400 hover:bg-gray-600 hover:text-white px-8 py-3 rounded-md transition w-max"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LetsDiscuss;
