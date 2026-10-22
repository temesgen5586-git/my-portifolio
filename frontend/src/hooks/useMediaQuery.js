import { useEffect, useState } from "react";

/**
 * Tracks whether a CSS media query matches.
 * Example: useMediaQuery("(max-width: 768px)")
 *
 * @param {string} query - Any valid CSS media query string.
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    // Sync immediately in case query changed
    setMatches(mql.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    }

    // Safari < 14 fallback
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
