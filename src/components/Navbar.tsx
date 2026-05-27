"use client";

import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Galería", href: "#gallery" },
    { name: "Testimonios", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gold/20 py-4 shadow-lg shadow-gold/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-gold p-2 rounded-lg group-hover:bg-gold-light transition-colors">
            <Car className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-wider uppercase">
            Golden <span className="text-gold">Car Center</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-all font-semibold uppercase tracking-wider text-sm"
          >
            Reservar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-gold/20 flex flex-col items-center py-6 gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-gold text-lg uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-gold text-black rounded-full font-bold uppercase tracking-wider w-10/12 text-center"
          >
            Agendar Cita
          </a>
        </motion.div>
      )}
    </nav>
  );
}
