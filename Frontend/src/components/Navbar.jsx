// src/components/Navbar.jsx
import Logo from "./Logo";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-60 backdrop-blur-md z-50 px-8 py-4 border-b border-gray-800">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ResumeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
