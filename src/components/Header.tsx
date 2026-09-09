import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { navItems } from "@/content/site";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background/95 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-6 md:h-16">
        {/* Personal typographic logo */}
        <Link
          to="/"
          className="group flex items-baseline gap-px"
          onClick={() => setOpen(false)}
        >
          <span className="mono-type text-[0.72rem] text-foreground md:text-[0.8rem]">
            candela sol pelliza
          </span>
          <span className="ml-1 inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="mono-type text-foreground transition-colors hover:text-accent"
              activeProps={{ className: "mono-type text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mono-type md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile nav */}
      <nav
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col py-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="mono-type border-b border-border py-4 last:border-0"
              activeProps={{
                className:
                  "mono-type border-b border-border py-4 last:border-0 text-accent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
