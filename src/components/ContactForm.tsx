import { useState } from "react";
import { site } from "@/content/site";

/**
 * Minimal mailto-based contact form (no backend).
 * Submitting opens the visitor's email client with the message prefilled.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent py-3 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mono-type text-accent">
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mono-type text-accent">
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="cf-message" className="mono-type text-accent">
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or enquiry…"
          className={`${fieldClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-10 inline-flex items-center gap-3 bg-foreground px-8 py-4 text-background transition-colors hover:bg-accent"
      >
        <span className="mono-type">Send message</span>
      </button>
    </form>
  );
}
