"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold tracking-tight">MKV</span>

        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#skills" className="hover:text-black">Skills</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </div>
    </nav>
  );
}
