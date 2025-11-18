import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[var(--muted)] font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[var(--text)] transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--text)]"
        >
          {open ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)]">
          <ul className="flex flex-col gap-4 py-4 px-6 text-[var(--muted)]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-lg hover:text-[var(--text)] transition"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition"
            >
              Resume
            </a>

            <ThemeToggle />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
