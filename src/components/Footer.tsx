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
            <p className="label-type text-background/60">Get in touch</p>
            <a
              href={`mailto:${site.email}`}
              className="display-type mt-4 block text-3xl lowercase tracking-tight transition-colors hover:text-accent md:text-5xl"
            >
              {site.email}
            </a>
            <p className="mt-4 text-background/60">{site.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-[auto_auto]">
            <nav className="flex flex-col gap-3">
              <p className="label-type text-background/60">Navigate</p>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="text-sm text-background/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="label-type text-background/60">Elsewhere</p>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-background/80 transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-background/15 pt-8 text-sm text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.role}</p>
        </div>
      </Container>
    </footer>
  );
}
