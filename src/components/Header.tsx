import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { site, navItems } from "@/content/site";
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
          <span className="display-type text-base lowercase leading-none tracking-tight md:text-lg">
            candela sol pelliza
          </span>
          <span className="ml-0.5 inline-block h-1.5 w-1.5 translate-y-[-1px] bg-accent" aria-hidden />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-bold lowercase tracking-tight text-foreground transition-colors hover:text-accent"
              activeProps={{
                className:
                  "text-sm font-bold lowercase tracking-tight text-foreground relative after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:w-full after:bg-accent",
              }}
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
          className="label-type md:hidden"
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
              className="flex items-center gap-2 border-b border-border py-3 text-base font-bold lowercase last:border-0"
              activeProps={{
                className:
                  "flex items-center gap-2 py-3 text-base font-bold lowercase text-foreground border-b border-border last:border-0 before:inline-block before:h-1.5 before:w-1.5 before:bg-accent",
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
