/**
 * Utility functions used across the portfolio.
 */

/**
 * Merge class names conditionally.
 * Usage: cn('base', isActive && 'active', className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a date range.
 * Usage: formatDateRange('2021-01-01', '2023-12-31') → 'Jan 2021 – Dec 2023'
 */
export function formatDateRange(start, end) {
  const fmt = (d) => {
    if (!d) return 'Present';
    const date = typeof d === 'string' ? new Date(d) : d;
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };
  return `${fmt(start)} – ${fmt(end)}`;
}

/**
 * Format a single date.
 * Usage: formatDate('2024-03-15') → 'Mar 2024'
 */
export function formatDate(date) {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

/**
 * Convert a string to a URL-safe slug.
 * Usage: slugify('My Cool App!') → 'my-cool-app'
 */
export function slugify(str = '') {
  return String(str)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Truncate a string to a max length.
 * Usage: truncate('Long text here', 10) → 'Long text…'
 */
export function truncate(str = '', max = 120) {
  const s = String(str);
  return s.length > max ? `${s.slice(0, max).trim()}…` : s;
}

/**
 * Check if a string is a valid email.
 */
export function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

/**
 * Check if a string is a valid URL.
 */
export function isUrl(value = '') {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Debounce a function.
 * Usage: const debounced = debounce(fn, 300);
 */
export function debounce(fn, wait = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

/**
 * Throttle a function.
 * Usage: const throttled = throttle(fn, 100);
 */
export function throttle(fn, wait = 100) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn(...args);
    }
  };
}

/**
 * Get initials from a name.
 * Usage: getInitials('John Doe') → 'JD'
 */
export function getInitials(name = '') {
  return String(name)
    .trim()
    .split(/\s+/)
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/**
 * Random integer between min and max (inclusive).
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Calculate reading time for a text (assuming 200 wpm).
 */
export function readingTime(text = '') {
  const words = String(text).trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Copy text to clipboard.
 * Usage: await copyToClipboard('hello');
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(String(text));
    return true;
  } catch {
    return false;
  }
}

/**
 * Smooth-scroll to an element by ID.
 */
export function scrollToId(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Check if we're in the browser (SSR safety).
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Get a value from localStorage safely.
 */
export function getStored(key, fallback = null) {
  if (!isBrowser) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Set a value in localStorage safely.
 */
export function setStored(key, value) {
  if (!isBrowser) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/**
 * Group an array by a key function.
 * Usage: groupBy(items, (x) => x.category)
 */
export function groupBy(array = [], keyFn = (x) => x) {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});
}

/**
 * Unique array by key.
 */
export function uniqueBy(array = [], keyFn = (x) => x) {
  const seen = new Set();
  return array.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Sort array by a key in ascending / descending order.
 */
export function sortBy(array = [], keyFn = (x) => x, dir = 'asc') {
  const copy = [...array];
  copy.sort((a, b) => {
    const ka = keyFn(a);
    const kb = keyFn(b);
    if (ka < kb) return dir === 'asc' ? -1 : 1;
    if (ka > kb) return dir === 'asc' ? 1 : -1;
    return 0;
  });
  return copy;
}

/**
 * Capitalize first letter.
 */
export function capitalize(str = '') {
  const s = String(str);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Format a number with + if it exceeds a threshold.
 * Usage: formatStat(500) → '500+'
 */
export function formatStat(n) {
  const num = Number(n);
  return Number.isFinite(num) ? `${num}+` : String(n);
}