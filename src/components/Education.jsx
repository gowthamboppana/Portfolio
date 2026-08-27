import SectionHeading from './SectionHeading';
import { educationData } from '../data/portfolioData';

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
                {edu.coursework && (
                  <p className="mt-3 text-sm text-muted sm:text-base">
                    Relevant coursework: {edu.coursework.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
