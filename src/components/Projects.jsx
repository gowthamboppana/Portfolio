import { useRef, useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '../data/portfolioData';

function Projects() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-24 py-16" aria-labelledby="projects-title">
      <SectionHeading title="Projects" subtitle="Selected builds with practical, user-focused outcomes." />
      <h3 id="projects-title" className="sr-only">
        Project list
      </h3>

      <div className="-mx-4 overflow-x-auto px-4 py-4 scrollbar-hide sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className={`projects-marquee ${isInView ? 'projects-marquee-moving' : ''}`}>
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex shrink-0 gap-6 pr-6"
              aria-hidden={groupIndex === 1}
            >
              {projectsData.map((project, index) => {
                const isDuplicate = groupIndex === 1;
                const animationIndex = groupIndex * projectsData.length + index;

                return (
                  <article
                    key={`${project.name}-${groupIndex}`}
                    className={`group w-[min(532px,calc(100vw-3rem))] shrink-0 rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent ${
                      hasEntered ? 'animate-slideIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: hasEntered ? `${animationIndex * 100}ms` : '0ms' }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.name} project preview`}
                        className="mb-5 h-40 w-full rounded-xl border border-border object-cover"
                        loading="lazy"
                      />
                    )}
                    <h4 className="font-heading text-xl font-semibold text-text">{project.name}</h4>
                    <p className="mt-3 text-sm text-muted sm:text-base">
                      <span className="font-medium text-text">What I did:</span> {project.summary}
                    </p>

                    {project.features && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-text">Features</p>
                        <ul className="mt-2 flex flex-wrap gap-2 text-xs text-muted sm:text-sm">
                          {project.features.map((feature) => (
                            <li key={feature} className="rounded-full bg-highlight px-3 py-1">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="mt-4 text-sm text-muted">
                      <span className="font-medium text-text">Tech:</span> {project.tech.join(', ')}
                    </p>

                    {project.links && project.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            tabIndex={isDuplicate ? -1 : undefined}
                            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
