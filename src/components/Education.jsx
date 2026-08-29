import SectionHeading from './SectionHeading';
import { educationData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  code: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z',
  ai: 'M12 2a2 2 0 0 1 2 2c0 .7-.4 1.4-1 1.7V7h-2V5.7c-.6-.3-1-1-1-1.7a2 2 0 0 1 2-2ZM9 9h6v1H9V9Zm-4 3h14v2H5v-2Zm2 4h10v2H7v-2Zm3 4h4v2h-4v-2Z',
  backend:
    'M4 4h16v5H4V4Zm0 7h16v9H4v-9Zm3 2v2h3v-2H7Zm0 3v2h3v-2H7Z',
  cloud: 'M17.5 10a4.5 4.5 0 0 0-8.7-1.7A4 4 0 0 0 9 16h8.5a3 3 0 0 0 0-6Z',
};

function CategoryIcon({ type }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-muted" aria-hidden="true">
      <path d={CATEGORY_ICONS[type] || CATEGORY_ICONS.code} />
    </svg>
  );
}

function CategoryCard({ category }) {
  return (
    <article className="h-full rounded-xl border border-border bg-highlight p-5">
      <h4 className="flex items-center gap-2 font-heading text-base font-semibold text-text">
        <CategoryIcon type={category.icon} />
        <span>{category.title}</span>
      </h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {category.courses.map((course) => (
          <li
            key={course}
            className="rounded-full bg-card px-3 py-1 text-sm text-muted"
          >
            {course}
          </li>
        ))}
      </ul>
    </article>
  );
}

function JourneyStep({ step, isLast }) {
  return (
    <li className="relative flex gap-4 sm:flex-1 sm:flex-col sm:gap-0">
      <div className="flex flex-col items-center">
        <span className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
        {!isLast && (
          <span className="mt-1 w-0.5 flex-1 bg-border sm:hidden" aria-hidden="true" />
        )}
      </div>
      <div className="pb-6 sm:pb-0 sm:pt-3">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">{step.period}</p>
        <h5 className="mt-0.5 font-heading text-sm font-semibold text-text sm:text-base">
          {step.theme}
        </h5>
        <ul className="mt-2 flex flex-wrap gap-1.5 sm:flex-col sm:gap-1">
          {step.courses.map((course) => (
            <li
              key={course}
              className="rounded-full bg-highlight px-2.5 py-0.5 text-xs text-muted sm:inline-block sm:w-fit"
            >
              {course}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function AcademicJourney({ journey }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8" aria-labelledby="education-journey-title">
      <h4 id="education-journey-title" className="font-heading text-base font-semibold text-text sm:text-lg">
        Academic Journey
      </h4>
      <p className="mt-1 text-sm text-muted">Progression across the four years of my degree.</p>
      <ol className="mt-5 sm:flex sm:gap-6 sm:border-t sm:border-border sm:pt-4">
        {journey.map((step, index) => (
          <JourneyStep key={step.period} step={step} isLast={index === journey.length - 1} />
        ))}
      </ol>
    </article>
  );
}

function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16" aria-labelledby="education-title">
      <SectionHeading title="Education" subtitle="Academic background." />
      <div className="space-y-4">
        {educationData.map((edu) => (
          <article key={edu.degree} className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-start gap-4">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="h-12 w-12 shrink-0 rounded-md border border-border bg-bg object-contain p-1"
                loading="lazy"
              />
              <div>
                <h3 id="education-title" className="font-heading text-xl font-semibold text-text">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-sm text-muted sm:text-base">
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {edu.institution} ↗
                  </a>
                  {' '} | {edu.duration}
                </p>
                <p className="mt-1 text-sm text-muted sm:text-base">CGPA: {edu.cgpa}</p>
              </div>
            </div>
            {edu.description && (
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {edu.description}
              </p>
            )}
            {edu.coursework?.length > 0 && (
              <div className="mt-6">
                <h4 className="font-heading text-base font-semibold text-text sm:text-lg">
                  Relevant Coursework
                </h4>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {edu.coursework.map((category) => (
                    <CategoryCard key={category.title} category={category} />
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
        {educationData.map((edu) =>
          edu.journey?.length > 0 ? <AcademicJourney key={edu.degree} journey={edu.journey} /> : null
        )}
      </div>
    </section>
  );
}

export default Education;
