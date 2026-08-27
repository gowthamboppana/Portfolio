import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { socialLinks, contactConfig } from '../data/portfolioData';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');

    if (contactConfig.formspreeEndpoint) {
      try {
        const response = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.open(`mailto:${contactConfig.recipientEmail}?subject=${subject}&body=${body}`, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16" aria-labelledby="contact-title">
      <SectionHeading
        title="Contact"
        subtitle="Open to software engineering opportunities — let's connect."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 id="contact-title" className="font-heading text-xl font-semibold text-text">
            Contact Details
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            <li>
              Email:{' '}
              <a
                className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                href={`mailto:${socialLinks.email}`}
              >
                {socialLinks.email}
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {socialLinks.linkedin.replace('https://www.linkedin.com/in/', 'linkedin.com/in/')}
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                {socialLinks.github.replace('https://github.com/', 'github.com/')}
              </a>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-heading text-xl font-semibold text-text">Send a Message</h3>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div>
              <label htmlFor="contact-name" className="block text-sm text-muted">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  errors.name ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Your name"
                aria-describedby={errors.name ? 'name-error' : undefined}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm text-muted">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  errors.email ? 'border-red-500' : 'border-border'
                }`}
                placeholder="you@example.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm text-muted">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  errors.message ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Write your message"
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400" role="status">
                {contactConfig.formspreeEndpoint
                  ? 'Message sent successfully!'
                  : 'Email client opened. Please send the message from your email app.'}
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;
