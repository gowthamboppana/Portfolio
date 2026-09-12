

<p align="center"><img src="./public/icon_logo.png" alt="GowthamLabs" width="140"/></p>

# Gowtham's Portfolio — v1.3.6

A personal portfolio website built with React, Vite, and Tailwind CSS. Features a responsive design with dark/light theme toggle, smooth animations, and a data-driven architecture.

## Tech Stack

- **React** ^18.3.1
- **Vite** ^7.3.1
- **Tailwind CSS** ^3.4.14
- **PostCSS** + **Autoprefixer**

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Dark/Light theme toggle with `localStorage` persistence
- Sticky navbar with active section tracking via `IntersectionObserver`
- Responsive mobile hamburger menu
- Hero section with social links and resume PDF download
- 7 content sections: About, Education, Skills, Experience, Projects, Certifications, Contact
- Custom `fadeUp` entrance animations
- Lazy-loaded images
- Accessibility (ARIA labels, focus-visible, reduced motion support)
- Data-driven architecture via `src/data/portfolioData.js`

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

## Project Structure

```
src/
  main.jsx               -- App entry point
  App.jsx                -- Root layout
  styles.css             -- Global styles and CSS variables
  context/
    ThemeContext.jsx      -- Theme state and toggle logic
  components/
    Navbar.jsx           -- Sticky navigation with active section tracking
    Hero.jsx             -- Landing section
    About.jsx            -- Bio section
    Education.jsx        -- Academic background
    Skills.jsx           -- Technical skills grid
    Experience.jsx       -- Work experience
    Projects.jsx         -- Project showcase
    Certifications.jsx   -- Certifications grid
    Contact.jsx          -- Contact info and form
    Footer.jsx           -- Footer
    SectionHeading.jsx   -- Reusable section heading
    ThemeToggle.jsx      -- Dark/light toggle button
  data/
    portfolioData.js     -- Centralized content data
  assets/                -- PDFs, images, logos
```

## License

Private project.
