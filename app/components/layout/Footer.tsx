"use client";

import { useLenis } from "../providers/LenisProvider";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Footer() {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { duration: 1.2 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="mt-32 bg-[#323b4c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              Mark Khean Viari
            </a>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              BSIT student specializing in Systems Development, with experience in
              project management, full-stack development, and game development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Pangasinan, Philippines</li>
              <li>
                <a
                  href="mailto:mamo.viari.up@phinmaed.com"
                  className="hover:text-white transition-colors"
                >
                  mamo.viari.up@phinmaed.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mark Khean Viari. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
