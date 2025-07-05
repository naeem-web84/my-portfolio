import React from "react";
import { Link } from "react-router";
import LetsDiscuss from "./LetsDiscuss";

function ContactCard() {
  return (
    <section className="py-20 px-6 bg-[#F0F0F4] text-black font-urbanist">
      <div className="max-w-6xl mx-auto p-10 rounded-xl shadow-xl text-center bg-white">
        <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-gray-700 mb-6">
          Let me help you turn your vision into reality.
        </p>
         <div>
          <LetsDiscuss></LetsDiscuss>
         </div>
      </div>
    </section>
  );
}

export default ContactCard;
