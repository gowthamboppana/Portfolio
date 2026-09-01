import SectionHeading from './SectionHeading';
import { experienceData } from '../data/portfolioData';

function BulletList({ items }) {
  return (
    <ul className="space-y-1.5 text-sm leading-relaxed text-muted sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleTimeline({ roles }) {
  const isTimeline = roles.length > 1;
  return (
    <div className={isTimeline ? 'relative mt-4' : 'mt-4'}>
      {isTimeline && (
        <span
          className="absolute bottom-2 left-[5px] top-2 w-px bg-border"
          aria-hidden="true"
        />
      )}
      <ol className="space-y-4">
        {roles.map((role) => (
          <li key={role.title} className={isTimeline ? 'relative pl-6' : ''}>
            {isTimeline && (
              <span
                className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg"
                aria-hidden="true"
              />
            )}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="font-heading text-sm font-semibold text-text sm:text-base">
                {role.title}
              </p>
              <span className="rounded-full bg-highlight px-2 py-0.5 text-xs text-muted">
                {role.type}
              </span>
              {role.current && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Current
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-muted">{role.duration}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ProjectBlock({ project }) {
  return (
    <section className="rounded-xl border border-border bg-highlight p-4" aria-label={project.name}>
      <h4 className="font-heading text-sm font-semibold text-text sm:text-base">{project.name}</h4>
      {project.description && (
        <p className="mt-1 text-sm text-muted">{project.description}</p>
      )}
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">
        Tech: {project.tech.join(', ')}
      </p>
      {project.highlights && (
        <div className="mt-2">
          <BulletList items={project.highlights} />
        </div>
      )}
    </section>
  );
}

function CompanyCard({ company }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:border-accent sm:p-8">
      <header className="flex items-center gap-3">
        {company.logo ? (
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border ${
              company.logoOnDark ? 'bg-black' : 'bg-bg'
            }`}
          >
            <img
              src={company.logo}
              alt={`${company.company} logo`}
              className="h-full w-full object-contain p-1.5"
              loading="lazy"
            />
          </span>
        ) : null}
        <h3 className="font-heading text-xl font-semibold text-text">{company.company}</h3>
      </header>

      {company.roles && <RoleTimeline roles={company.roles} />}

      {(company.projects || company.highlights) && (
        <>
          <hr className="my-5 border-border" />
          <div className="space-y-3">
            {company.projects
              ? company.projects.map((project) => (
                  <ProjectBlock key={project.name} project={project} />
                ))
              : null}
            {company.highlights && !company.projects ? (
              <BulletList items={company.highlights} />
            ) : null}
          </div>
        </>
      )}
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
