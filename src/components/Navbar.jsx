import React, { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Recipes', href: '#recipes' },
    { label: 'Cookies', href: '#cookies' },
    { label: 'Cinnamon Rolls', href: '#cinnamon' },
    { label: 'Guide', href: '#guide' },
    { label: 'Tips', href: '#tips' },
    { label: 'Favourites', href: '#favourites' },
    { label: 'About', href: '#about' },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${scrolled ? 'glass shadow-lg shadow-mocha-600/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <span className="text-2xl animate-float">🧁</span>
            <div className="leading-none">
              <span className="font-accent text-xl font-bold text-gradient">SweetCrumb</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-mocha-300 dark:text-mocha-200 font-body -mt-0.5">Bakery</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 rounded-full text-sm font-body text-mocha-400 dark:text-cream-300 hover:text-warm-500 dark:hover:text-cream-100 hover:bg-warm-50 dark:hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-warm-100 dark:hover:bg-white/10 text-lg"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center hover:bg-warm-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="text-mocha-500 dark:text-cream-200 text-xl">
                {menuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-white/20 dark:border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl font-body text-mocha-500 dark:text-cream-200 hover:bg-warm-50 dark:hover:bg-white/10 hover:text-warm-600 transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
