import SectionHeading from './SectionHeading';
import { aboutData } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16" aria-labelledby="about-title">
      <SectionHeading title="About" subtitle="Engineering profile and professional focus." />
      <div id="about-title" className="rounded-2xl border border-border bg-highlight p-5 shadow-soft transition-colors sm:p-6">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-base leading-relaxed text-text ${index > 0 ? 'mt-4' : ''}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default About;
