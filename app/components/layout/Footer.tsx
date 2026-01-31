"use client";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-black/10 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Identity */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Mark Khean Viari
            </h3>
            <p className="text-sm text-gray-600 max-w-sm">
              BSIT student specializing in Systems Development, with experience in
              project management, full-stack development, and game development.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-2">Contact</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Pangasinan, Philippines</li>
              <li>
                <a
                  href="mailto:mamo.viari.up@phinmaed.com"
                  className="hover:underline"
                >
                  mamo.viari.up@phinmaed.com
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-2">Navigation</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-black/5 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>
            © {new Date().getFullYear()} Mark Khean Viari
          </span>
        </div>
      </div>
    </footer>
  );
}
