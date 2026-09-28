import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 focus-ring rounded-lg">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-sm font-bold text-white">
        DS
      </span>
      <span className="text-lg font-extrabold tracking-tight text-slate-900">
        Dev <span className="text-gradient-brand">Stack</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger left */}
        <button
          type="button"
          className="focus-ring -ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>

        {/* Left on desktop, center on mobile */}
        <div className="md:flex-1">
          <Logo />
        </div>

        {/* Center links - desktop only */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`focus-ring rounded text-sm font-medium transition-colors ${
                  i === 0 ? "text-pink-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <a
            href="#signin"
            className="focus-ring rounded text-xs font-semibold text-slate-700 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="focus-ring rounded-full bg-gradient-brand px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] sm:px-4 sm:py-2 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`focus-ring block rounded-lg px-3 py-2 text-sm font-medium ${
                    i === 0 ? "bg-pink-50 text-pink-600" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
