import SectionHeading from './SectionHeading';
import { projectsData } from '../data/portfolioData';

function ProjectCard({ project, featured }) {
  const hasLinks = project.links.github || project.links.demo;

  return (
    <article
      className={`group rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-heading text-xl font-semibold text-text">{project.name}</h4>
        <div className="flex items-center gap-2">
          {project.status === 'active' && (
            <span className="shrink-0 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600 dark:text-green-400">
              Active
            </span>
          )}
          {project.status === 'beta' && (
            <span className="shrink-0 rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-600 dark:text-yellow-400">
              Beta
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-muted sm:text-base">{project.summary}</p>

      {project.description && project.description !== project.summary && (
        <p className="mt-2 text-sm text-muted">{project.description}</p>
      )}

      <div className="mt-4">
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-highlight px-3 py-1 text-xs font-medium text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {hasLinks && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2 2.8 1.4.1-.8.4-1.4.7-1.8-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.4 11.4 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M14 3l-1.4 1.4 7.6 7.6H3v2h17.2l-7.6 7.6L14 23l10-10L14 3Z" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function Projects() {
  const featured = projectsData.filter((p) => p.category === 'featured');
  const supporting = projectsData.filter((p) => p.category === 'supporting');

  return (
    <section id="projects" className="scroll-mt-24 py-16" aria-labelledby="projects-title">
      <SectionHeading
        title="Projects"
        subtitle="Independent projects built under GowthamLabs and personal work."
      />
      <h3 id="projects-title" className="sr-only">
        Project list
      </h3>

      {featured.length > 0 && (
        <>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Featured</h4>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.name} project={project} featured />
            ))}
          </div>
        </>
      )}

      {supporting.length > 0 && (
        <>
          <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wide text-muted">Additional Projects</h4>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
