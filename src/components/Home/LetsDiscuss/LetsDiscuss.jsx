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
        navigate(-1);
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
      [e.target.name]: "",
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 overflow-x-hidden"
      style={{
        backgroundColor: "var(--color-light-bg)",
        color: "var(--color-dark-primary)",
        fontFamily: "'Urbanist', sans-serif",
      }}
    >
      <Toaster position="bottom-right" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left side: Contact Info */}
        <div
          className="md:col-span-1 lg:border-r lg:border-[var(--color-accent)] pr-6"
          data-aos="fade-up"
        >
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{ color: "var(--color-dark-primary)" }}
          >
            Contact
          </h2>
          <p className="mb-6 text-black">
            I’m always open to discuss your ideas or work together on something great.
          </p>
          <div className="space-y-5 text-lg text-black">
            <div className="flex items-start gap-4">
              <FiPhone className="text-2xl mt-1" />
              <span className="break-words">+880 1712 499 084</span>
            </div>
            <div className="flex items-start gap-4">
              <FiMail className="text-2xl mt-1" />
              <span className="break-all">naeemislam.hasan74@gmail.com</span>
            </div>
            <div className="flex items-start gap-4">
              <FiMessageSquare className="text-2xl mt-1" />
              <span className="break-words">WhatsApp: +880 1538 390 0084</span>
            </div>
            <div className="flex items-start gap-4">
              <FiMapPin className="text-2xl mt-1" />
              <span className="break-words">Rangpur, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="md:col-span-1" data-aos="fade-up">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 max-w-md mx-auto"
            noValidate
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`p-3 rounded-md border ${
                errors.name
                  ? "border-red-500"
                  : "border-[var(--color-dark-primary)]"
              } focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white placeholder-gray-400 transition w-full`}
              style={{ color: "var(--color-dark-primary)" }}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`p-3 rounded-md border ${
                errors.email
                  ? "border-red-500"
                  : "border-[var(--color-dark-primary)]"
              } focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white placeholder-gray-400 transition w-full`}
              style={{ color: "var(--color-dark-primary)" }}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className={`p-3 rounded-md border ${
                errors.message
                  ? "border-red-500"
                  : "border-[var(--color-dark-primary)]"
              } focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] bg-white placeholder-gray-400 transition resize-none w-full`}
              style={{ color: "var(--color-dark-primary)" }}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-8 py-3 rounded-md border cursor-pointer transition w-max"
                style={{
                  color: "var(--color-dark-primary)",
                  borderColor: "var(--color-dark-primary)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-dark-primary)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-dark-primary)";
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LetsDiscuss;
