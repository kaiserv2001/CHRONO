"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-chrono-black/95 backdrop-blur-md border-b border-chrono-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.3em] text-chrono-gold hover:text-chrono-gold-light transition-colors duration-300"
        >
          CHRONO
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Collections", href: "/collections" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.2em] text-chrono-gray hover:text-chrono-cream transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-chrono-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="text-chrono-gray hover:text-chrono-gold transition-colors duration-300"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Bag"
            className="text-chrono-gray hover:text-chrono-gold transition-colors duration-300"
          >
            <ShoppingBag size={18} />
          </button>

          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            className="md:hidden text-chrono-gray hover:text-chrono-gold transition-colors duration-300"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        } bg-chrono-black/98 border-t border-chrono-gold/10`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {[
            { label: "Collections", href: "/collections" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-chrono-gray hover:text-chrono-gold transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
