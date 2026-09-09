import { useEffect, useRef, useState } from "react";

/**
 * Observes an element and reports whether it is in view.
 * Used for scroll-triggered reveals (rootMargin default) and for the
 * "active row" state on index lists (pass a centred rootMargin band).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  rootMargin = "0px 0px -12% 0px",
  threshold = 0.15,
  once = true,
}: {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
} = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}
