import { Link } from "@tanstack/react-router";
import { site, navItems } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mono-type text-accent">[ get in touch ]</p>
            <a
              href={`mailto:${site.email}`}
              className="display-type mt-4 block text-2xl uppercase transition-colors hover:text-accent md:text-4xl"
            >
              {site.email}
            </a>
            <p className="mono-type mt-4 text-background/70">{site.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-[auto_auto]">
            <nav className="flex flex-col gap-3">
              <p className="mono-type text-accent">[ navigate ]</p>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="mono-type text-background/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="mono-type text-accent">[ elsewhere ]</p>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mono-type text-background/80 transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mono-type mt-16 flex flex-col gap-2 border-t border-background/15 pt-8 text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>{site.role}</p>
        </div>
      </Container>

      {/* Repeated full-width wordmark closing the page */}
      <div className="overflow-hidden border-t border-background/15">
        <p className="display-type whitespace-nowrap px-2 py-4 text-[13vw] uppercase leading-[0.8] text-background/15">
          {site.name} — {site.name} —
        </p>
      </div>
    </footer>
  );
}
