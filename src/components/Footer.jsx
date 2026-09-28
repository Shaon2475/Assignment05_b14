const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 19 19" fill="currentColor" {...props}>
      <use href="/icons.svg#github-icon" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 19 19" fill="currentColor" {...props}>
      <use href="/icons.svg#x-icon" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-4 flex items-center gap-4 text-slate-500">
              <a href="https://github.com" aria-label="GitHub" className="focus-ring hover:text-slate-900">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href="https://x.com" aria-label="Twitter" className="focus-ring hover:text-slate-900">
                <XIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="focus-ring hover:text-slate-900">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-slate-900">{group.title}</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="focus-ring text-sm text-slate-500 hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="focus-ring hover:text-slate-600">
              Privacy
            </a>
            <a href="#terms" className="focus-ring hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
