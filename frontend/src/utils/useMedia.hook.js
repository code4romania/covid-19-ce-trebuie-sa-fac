import { useEffect, useState } from "react";
/**
 * Hook that evaluates media queries.
 * Based on https://usehooks.com/useMedia/
 */

/** Query that matches small devices (same one used in css) */
export const SMALL_DEVICE_QUERY = "(max-width: 768px)";

/**
 * Use a different value depending on which media query matches.
 * Note: queries are executed in order (first match wins)
 *
 * @param {string[]} queries one or more media queries to match
 * @param {Array} values the values to use for each media query
 * @param {*} defaultValue the value to use if none match
 */
export function useMedia(queries, values, defaultValue) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}
