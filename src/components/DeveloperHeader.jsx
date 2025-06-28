import React from "react"; 

export default function DeveloperHeader() {
  return (
    <div className="min-h-screen bg-[#1A1E24] text-white font-sans p-6">
      {/* Navbar */}
      <header className="flex justify-between items-center border-b border-gray-700 pb-4">
        <div className="text-[#00FFC6] text-xl font-semibold">
          &lt;C/&gt; <span className="text-white">SinanTokmak</span>
        </div>
        <nav className="flex gap-6 text-sm text-[#00FFC6]">
          <a href="#">Home</a>
          <a href="#">Blogs</a>
          <input
            type="text"
            placeholder="Search"
            className="rounded px-2 py-1 bg-transparent border border-gray-500 text-white focus:outline-none"
          />
          <a href="#">Instagram</a>
          <a href="#">Discord</a>
          <a href="#">GitHub</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-bold text-[#90F0E3] mb-4">Developer</h1>
          <p className="text-3xl mb-2">
            Hey I’m <span className="text-[#00FFC6]">Sinan</span>, <br /> Full-Stack Developer
          </p>
          <p className="text-sm text-gray-300 mb-6">
            I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done.
          </p>
          <p className="text-[#00FFC6] text-sm font-semibold">Let's Talk 👋</p>
        </div>

        {/* Right Card */}
        <div className="bg-[#11151C] border-l-4 border-[#00FFC6] rounded-lg p-6 relative shadow-xl w-fit">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="rounded-full w-20 h-20 mx-auto mb-4"
          />
          <div className="text-center">
            <p className="text-lg font-semibold">Sinan</p>
            <p className="text-sm text-gray-400">Full-Stack Developer</p>
          </div>
          <ul className="text-sm text-gray-400 mt-4 space-y-1">
            <li>education.sinan@gmail.com</li>
            <li>Turkey</li>
            <li>Full-time / Freelancer</li>
            <li>www.sinantokmak.com</li>
          </ul>
          <div className="flex justify-center gap-2 mt-4">
            <button className="bg-[#00FFC6] text-black px-4 py-1 rounded text-sm">LinkedIn</button>
            <button className="bg-[#00FFC6] text-black px-4 py-1 rounded text-sm">GitHub</button>
          </div>
          <div className="flex justify-center mt-4">
            <button> Download CV</button>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <aside className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 bg-[#1A1E24] py-4 px-2 rounded-r-lg border border-gray-700">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
      </aside>

      {/* Experience Box */}
      <section className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-[#11151C] text-white px-6 py-4 rounded-lg shadow-md text-center">
        <p className="text-[#00FFC6] font-bold text-lg">4</p>
        <p className="text-xs">Programming Languages</p>
        <p className="text-[#00FFC6] font-bold text-lg mt-2">6</p>
        <p className="text-xs">Development Tools</p>
        <p className="text-[#00FFC6] font-bold text-lg mt-2">8</p>
        <p className="text-xs">Years of Experience</p>
      </section>
    </div>
  );
}
