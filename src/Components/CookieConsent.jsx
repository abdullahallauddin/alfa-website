import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KEY = "alfa_cookie_consent";

// Allows the Cookies Policy page (or anywhere) to re-open the banner so the
// visitor can change their choice.
export const reopenCookiePreferences = () => {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    /* ignore */
  }
  window.dispatchEvent(new Event("alfa:cookie-reopen"));
};

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch (e) {
      /* ignore */
    }
    if (!stored) setOpen(true);
    const onReopen = () => setOpen(true);
    window.addEventListener("alfa:cookie-reopen", onReopen);
    return () => window.removeEventListener("alfa:cookie-reopen", onReopen);
  }, []);

  const decide = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      /* ignore */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[1001] sm:right-auto sm:max-w-md rounded-2xl border border-white/10 bg-[#0a1428]/95 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md"
    >
      <h3 className="font-roboto text-base font-medium text-white">
        We value your privacy
      </h3>
      <p className="mt-2 font-roboto text-sm leading-relaxed text-white/70">
        We use strictly necessary cookies to run this site and, with your
        consent, analytics cookies to improve it. You can accept or reject
        non-essential cookies. See our{" "}
        <Link to="/cookies-policy" className="text-[#2C95D2] hover:underline">
          Cookies Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="rounded-full bg-[#2C95D2] px-5 py-2 font-roboto text-sm font-medium text-white transition-colors hover:bg-[#2C95D2]/90"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="rounded-full border border-white/20 px-5 py-2 font-roboto text-sm text-white/85 transition-colors hover:border-white/40 hover:text-white"
        >
          Reject non-essential
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
