import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { awardsData } from '../data/portfolioData';

function AwardCard({ award, onViewCertificate, onViewPhoto }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-black">
          <img
            src={award.logo}
            alt={`${award.organization} logo`}
            className="h-full w-full object-contain p-1.5"
            loading="lazy"
          />
        </span>
        <div className="min-w-0">
          <h4 className="font-heading text-base font-semibold text-text sm:text-lg">{award.title}</h4>
          <p className="mt-0.5 text-sm font-medium text-accent">{award.organization}</p>
          <p className="mt-0.5 text-xs text-muted">{award.date}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{award.description}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onViewCertificate}
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M14 3l-1.4 1.4 7.6 7.6H3v2h17.2l-7.6 7.6L14 23l10-10L14 3Z" />
          </svg>
          View Certificate
        </button>
        <button
          type="button"
          onClick={onViewPhoto}
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M3 4h18v16H3V4Zm2 2v12h14V6H5Zm2 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-2 8.5 3-3 2 2 5-6 4 4v3H5v-4Z" />
          </svg>
          View Award Photo
        </button>
      </div>
    </article>
  );
}

function ImageLightbox({ src, alt, label, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div className="relative max-h-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4Z" />
          </svg>
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-full w-auto rounded-lg border border-border bg-card object-contain shadow-soft"
        />
      </div>
    </div>
  );
}

function Awards() {
  const [lightbox, setLightbox] = useState(null);

  const openCertificate = (award) =>
    setLightbox({
      src: award.certificate,
      alt: 'AlstonAir Synergy Star Award certificate',
      label: 'Award certificate',
    });

  const openPhoto = (award) =>
    setLightbox({
      src: award.photo,
      alt: 'Velora 2026 Synergy Star Award presented to Gowtham',
      label: 'Award photo',
    });

  return (
    <section id="awards" className="scroll-mt-24 py-16" aria-labelledby="awards-title">
      <SectionHeading title="Awards & Achievements" subtitle="Recognitions and accomplishments." />
      <h3 id="awards-title" className="sr-only">
        Awards and achievements list
      </h3>
      <div className="mx-auto max-w-xl">
        {awardsData.map((award) => (
          <AwardCard
            key={award.title}
            award={award}
            onViewCertificate={() => openCertificate(award)}
            onViewPhoto={() => openPhoto(award)}
          />
        ))}
      </div>
      {lightbox ? (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </section>
  );
}

export default Awards;
