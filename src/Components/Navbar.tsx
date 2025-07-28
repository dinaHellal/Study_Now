import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Login", href: "#Login" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">StudyNow</div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-blue-700"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-blue-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`hover:text-blue-900 transition-all ${
                  active === item.name ? "text-blue-900 font-bold " : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white px-4 py-2">
          {navItems.map((item) => (
            <li key={item.name} className="py-2 ">
              <a
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
                className={`block text-black ${
                  active === item.name ? "font-bold " : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
