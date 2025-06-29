// ContactCard.jsx
import React from "react";
import { Link } from "react-router";

function ContactCard() {
  return (
    <section className="py-20 px-6 bg-primary text-primary-content font-urbanist">
      <div className="max-w-4xl mx-auto bg-[#1A1E24] p-10 rounded-xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
        <p className="text-accent mb-6">Let me help you turn your vision into reality.</p>
        <Link
          to="/letsDiscuss"
          className="inline-block text-center px-6 py-3 btn  bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-black transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default ContactCard;