import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ content }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-14 h-14">
            <Image
              src="/images/yorklogo.png"
              alt="York GNCTR Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {content.site.navbar.map((link, idx) => (
            <Link
              key={idx}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              {link}
            </Link>
          ))}
          <Link
            href={content.site.ctaLink}
            className="ml-4 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition"
          >
            {content.site.ctaText}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-dark focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4 animate-slideDown">
          {content.site.navbar.map((link, idx) => (
            <Link
              key={idx}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-dark hover:text-primary transition-colors duration-200 font-medium"
            >
              {link}
            </Link>
          ))}
          <Link
            href={content.site.ctaLink}
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2 bg-primary text-white rounded-full font-semibold shadow hover:bg-secondary transition"
          >
            {content.site.ctaText}
          </Link>
        </div>
      )}
    </nav>
  );
}
