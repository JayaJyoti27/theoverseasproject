/**
 * Remembers where a guest was headed (e.g. the job they clicked "Apply" on)
 * so we can send them back after they log in or sign up.
 *
 * Stored in localStorage rather than only in the URL because the email
 * confirmation link opens a fresh tab/page at /candidate with no query string.
 */
const KEY = "ozone:postLoginRedirect";

/** Only same-site paths into the public job board or candidate portal are allowed. */
export function isSafeRedirect(path: unknown): path is string {
  return typeof path === "string" && /^\/(jobs|Candidates)(\/[A-Za-z0-9._~-]+)*\/?$/.test(path);
}

export function savePostLoginRedirect(path: unknown) {
  if (!isSafeRedirect(path)) return;
  try {
    window.localStorage.setItem(KEY, path);
  } catch {
    // storage unavailable (private mode etc.) — redirect just won't survive a reload
  }
}

/** Returns the saved redirect (if valid) and clears it so it's only used once. */
export function takePostLoginRedirect(): string | null {
  try {
    const value = window.localStorage.getItem(KEY);
    window.localStorage.removeItem(KEY);
    return isSafeRedirect(value) ? value : null;
  } catch {
    return null;
  }
}
