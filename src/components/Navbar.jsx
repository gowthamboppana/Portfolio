import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sectionEls = navLinks
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter(Boolean);

    if (!sectionEls.length) return undefined;

    const updateActive = () => {
      const marker = window.innerHeight * 0.45;
      let current = navLinks[0].href;
      for (const el of sectionEls) {
        if (el.getBoundingClientRect().top <= marker) {
          current = `#${el.id}`;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="font-heading text-lg font-semibold tracking-tight text-text transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          Gowtham
        </a>

        <button
          type="button"
          className="rounded-md border border-border px-3 py-2 text-sm text-text md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md border-b-2 px-2 py-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    activeSection === link.href
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <div id="mobile-menu" className={`border-t border-border bg-bg px-4 py-3 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-2 py-2 text-sm transition hover:bg-highlight hover:text-accent ${
                  activeSection === link.href ? 'bg-highlight text-accent' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
