# Changelog

## [1.3.6] - 2026-09-12
> Centered the logo image in the README.

### Changed

- Wrapped the logo image in `README.md` in a `<p align="center">` container so it renders centered on GitHub and other Markdown viewers.

---

## [1.3.5] - 2026-09-01
> Lowercased all asset folders and simplified the social sharing preview to a logo-only image.

### Changed

- Renamed every folder under `src/assets/` to lowercase: `awards`, `certifications`, `logos`, `resumes`, `logos/certificates`, `logos/companies`, with spaces normalized to hyphens (`logos/university-logo`, `project-images`).
- Updated all asset import paths in `src/data/portfolioData.js` to point to the new lowercase directories (resume PDF, certificate PDFs/logo badges, university logo, award images, company logos, and project images). No files were moved or renamed — only directories.
- Updated `public/og-image.png` to a clean 1200×630 logo-only preview: the Gowtham Labs logo centered on a white background with no text, so social previews show just the logo. `og`/`twitter` metadata in `index.html` is unchanged.
- Updated version to `1.3.5` in `package.json`.

---

## [1.3.4] - 2026-09-01
> Added Open Graph / social sharing preview, favicon, and corrected asset paths.

### Added

- **Open Graph / Social Sharing Preview**: Generated a 1200×630 branded OG image (`public/og-image.png`) featuring the Gowtham Labs logo, "Gowtham Datta Boppana", and "Full-Stack Software Engineer" for clean, professional previews on WhatsApp, LinkedIn, Facebook, and Twitter/X. Kept the logo at its original proportions without redesign or recoloring.
- **Social Metadata**: Added `og:title`, `og:description`, `og:image` (+ `og:image:width`/`height`/`alt`), `og:url`, `og:type`, `og:site_name`, and Twitter/X card metadata (`twitter:card: summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`) using absolute URLs under `https://portfolio.gowthamlabs.com/`.
- **Favicon**: Added a tightly cropped square version of the Gowtham Labs logo as the site favicon (`public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, and 180×180 `public/apple-touch-icon.png`).

### Changed

- Corrected asset import paths in `src/data/portfolioData.js` to match the reorganized filesystem (certificate PDFs, logo images, and university logo now resolve to their current locations).
- Updated `index.html` with favicon links and complete Open Graph / Twitter card metadata pointing to the new OG image.

---

## [1.2.3] - 2026-09-01
> Added Awards & Achievements section, company logos, and design refinements.

### Added

- **Awards & Achievements Section**: New `#awards` section (between Certifications and Contact) with a single award card for "The Synergy Star Award" (AlstonAir, April 3, 2026), a professional trophy icon, recognition description, and a certificate lightbox/modal (`src/components/Awards.jsx`).
- **Award Photo Lightbox**: Second "View Award Photo" button that opens the award plaque image in the same modal style with appropriate alt text.
- **Company Logos in Experience**: Added the AlstonAir and DataFoundry logos to the company headers in the Experience section, preserving aspect ratio and staying responsive in light/dark mode (`src/components/Experience.jsx`).
- **AlstonAir logo in Awards**: Replaced the trophy icon with the AlstonAir logo asset in the award card.

### Changed

- Removed the vertical timeline (line + circle markers) from the Datafoundry card in the Experience section for its single role, while keeping the "Python Intern" role details visible. Timeline styling now only renders for companies with multiple roles (`src/components/Experience.jsx`).
- Updated GitHub URL from `https://github.com/gowtham-labs` to `https://github.com/gowthamboppana` in `src/data/portfolioData.js`.
- Navbar updated to include the new "Awards" item (active-section highlight + smooth scroll).
- Reverted Hero "View Projects" and "Download Resume" buttons back to the previous `rounded-md` design (`src/components/Hero.jsx`).
- Reorganized award/certificate assets into `src/assets/Awards/` and added DataFoundry/AlstonAir logo assets to `src/assets/Certifications/Logos/`.
- Updated version to `1.2.3` in `package.json`.

---

## [1.1.3] - 2026-08-26
> Structured version history and corrected versioning.

### Changed

- Consolidated version entries into a single release (`v1.1.2`).
- Corrected version to `1.1.2` in `CHANGELOG.md` and `package.json`.

---

## [1.1.2] - 2026-08-26
> Resume updated and added README & CHANGELOG files.

### Added

- Added new resume PDF (`src/assets/Resume/Gowtham_Datta_Boppana_Resume.pdf`).
- Added `README.md` with project overview and setup instructions.
- Added `CHANGELOG.md` to track version history (tested twice).

### Changed

- Updated resume file reference from `Gowtham_Boppana_Software_Engineer_2025.pdf` to `Gowtham_Datta_Boppana_Resume.pdf` in Hero component (`src/components/Hero.jsx`).
- Updated version to `1.1.2` in `package.json`.

### Removed

- Removed reference to old resume file `Gowtham_Boppana_Software_Engineer_2025.pdf` (file still present in assets but no longer used).

## [1.0.0] - 2026-08-26
> Initial release — full portfolio built from scratch with React, Vite, and Tailwind CSS.

### Added

- **Tech Stack**: React 18, Vite 7, Tailwind CSS 3, PostCSS, Autoprefixer.
- **Dark/Light Theme Toggle**: Full theme system using CSS custom properties, `localStorage` persistence, smooth 300ms color transitions, and `data-theme` attribute strategy.
- **Sticky Navbar**: Backdrop-blur sticky header with `IntersectionObserver`-based active section highlighting and responsive mobile hamburger menu.
- **Hero Section**: Full-viewport landing with name, subtitle, skill tags, social links (GitHub, LinkedIn, Email), "View Projects" CTA, and resume PDF download.
- **About Section**: Bio card with background and current focus.
- **Education Section**: Degree, university, CGPA, and relevant coursework.
- **Skills Section**: 7-category responsive grid (Frontend, Backend, Databases, State Management, Testing, Tools, Cloud) with custom SVG icons.
- **Experience Section**: Two companies (Alstonair Technologies, Data Foundry) with project sub-cards and bullet lists.
- **Projects Section**: 2-column responsive grid showcasing React Movies App and Online Grievance Management System with preview images, feature tags, and links.
- **Certifications Section**: 5 certifications (Salesforce AI Associate, Google TensorFlow, Automation Anywhere RPA, Oracle Cloud, Microsoft Azure AZ-900) with logos and PDF certificate links.
- **Contact Section**: Contact details card (Email, LinkedIn, GitHub) and a placeholder message form.
- **SectionHeading Component**: Reusable heading + subtitle with `fadeUp` entrance animation.
- **Data Separation**: All content centralized in `src/data/portfolioData.js`, keeping components presentation-only.
- **Responsive Design**: Mobile-first with `sm`, `md`, `lg` breakpoints. Grid layouts adapt from 1 to 2-3 columns.
- **Accessibility**: Semantic HTML, `aria-labelledby`/`aria-label` on sections and interactive elements, `aria-expanded`/`aria-controls` on mobile menu, `focus-visible` ring on all interactive elements, screen-reader-only headings.
- **Reduced Motion Support**: `@media (prefers-reduced-motion: reduce)` disables all animations and transitions.
- **Smooth Scrolling**: `scroll-behavior: smooth` with `scroll-mt-24` offset for sticky navbar.
- **Entrance Animations**: Custom `fadeUp` keyframe (550ms, fade + slide up 8px) on Hero and SectionHeadings.
- **Lazy Loading**: All images use `loading="lazy"`.
- **Custom Typography**: Poppins for headings, Inter for body text (loaded via Google Fonts).
- **Custom Design Tokens**: 7 semantic color tokens (bg, text, muted, accent, card, highlight, border) bridged into Tailwind via CSS variables.
- **Hover Micro-interactions**: Card lift on hover, accent border transitions, social icon lift effects.
- **Text Selection Styling**: Custom `::selection` color (accent blue background, white text).
