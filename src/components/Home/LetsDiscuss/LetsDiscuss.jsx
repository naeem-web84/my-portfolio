import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

function LetsDiscuss() {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    toast.success("Thank you for knocking! I'll get back to you soon.");
    setTimeout(() => {
      navigate(-1); // same as Back button
    }, 1500);
  }
};

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "", // Clear error as user types
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-primary text-white font-urbanist">
      <Toaster position="bottom-right" />

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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 max-w-md mx-auto w-full"
            noValidate
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`p-3 rounded-md bg-transparent border ${
                  errors.name ? "border-red-500" : "border-white"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition w-full`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`p-3 rounded-md bg-transparent border ${
                  errors.email ? "border-red-500" : "border-white"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition w-full`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className={`p-3 rounded-md bg-transparent border ${
                  errors.message ? "border-red-500" : "border-white"
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary resize-none transition w-full`}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="border border-secondary text-secondary hover:bg-secondary hover:text-black px-8 py-3 rounded-md transition w-max"
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
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
