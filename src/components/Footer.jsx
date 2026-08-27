import { socialLinks } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-muted sm:px-6 lg:px-8 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Gowtham Datta Boppana</p>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="transition hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Send email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
