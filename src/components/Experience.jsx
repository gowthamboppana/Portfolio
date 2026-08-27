import SectionHeading from './SectionHeading';
import { experienceData } from '../data/portfolioData';

function RoleTag({ role }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-accent">{role.title}</span>
      <span className="rounded-full bg-highlight px-2 py-0.5 text-xs text-muted">{role.type}</span>
      {role.current && (
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">Current</span>
      )}
      {role.previous && (
        <span className="rounded-full bg-highlight px-2 py-0.5 text-xs text-muted">Previously</span>
      )}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-muted sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectBlock({ project }) {
  return (
    <section className="rounded-xl border border-border bg-highlight p-4 sm:p-5" aria-label={project.name}>
      <h4 className="font-heading text-base font-semibold text-text sm:text-lg">{project.name}</h4>
      {project.description && (
        <p className="mt-1 text-sm text-muted">{project.description}</p>
      )}
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">
        Tech: {project.tech.join(', ')}
      </p>
      {project.highlights && (
        <div className="mt-3">
          <BulletList items={project.highlights} />
        </div>
      )}
    </section>
  );
}

function CompanyCard({ company }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:border-accent sm:p-8">
      <header className="border-b border-border pb-4">
        <h3 className="font-heading text-xl font-semibold text-text">{company.company}</h3>
        <div className="mt-3 space-y-2">
          {company.roles.map((role) => (
            <div key={role.title}>
              <RoleTag role={role} />
              <p className="mt-1 text-sm text-muted">{role.duration}</p>
            </div>
          ))}
        </div>
      </header>
      <div className="mt-5">
        {company.projects && (
          <div className="space-y-4">
            {company.projects.map((project) => (
              <ProjectBlock key={project.name} project={project} />
            ))}
          </div>
        )}
        {company.highlights && !company.projects && (
          <BulletList items={company.highlights} />
        )}
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16" aria-labelledby="experience-title">
      <SectionHeading title="Experience" subtitle="Professional roles and engineering contributions." />
      <div className="space-y-6">
        {experienceData.map((company) => (
          <CompanyCard key={company.company} company={company} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
