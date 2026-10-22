import { useEffect, useState } from "react";

/**
 * Tracks the user's "prefers-reduced-motion" OS setting.
 * Returns `true` when the user wants reduced motion, `false` otherwise.
 *
 * Updates automatically if the user changes the setting.
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    // SSR-safe: default to false if window is unavailable
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setPrefersReduced(event.matches);

    // Modern API
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    }

    // Safari < 14 fallback
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, []);

  return prefersReduced;
}

export default useReducedMotion;
