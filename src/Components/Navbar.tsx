// Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">StudyNow</div>

        {/* Links - large screens */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Login / Sign Up */}
        <div className="hidden md:flex space-x-3">
          <button className="text-sm text-blue-600 font-semibold hover:underline cursor-pointer">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 cursor-pointer">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#home" className="block cursor-pointer" onClick={() => setMenuOpen(false)} >Home</a>
          <a href="#about" className="block cursor-pointer"  onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="block cursor-pointer" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" className="block cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="pt-2 border-t">
            <button className="block w-full text-left text-blue-600 hover:underline">Login</button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-2">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
