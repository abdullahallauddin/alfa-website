import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Elements that get a scroll-reveal. Kept to content blocks so it reads as
// "content coming alive", not chrome animating.
const REVEAL_SELECTOR = "h1,h2,h3,h4,p,li,img,blockquote,figure";

// Dark navy theme shell for every page except home, plus a progressive-
// enhancement scroll-reveal so inner pages feel alive instead of static.
const InnerLayout = () => {
  const rootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // content stays visible, no motion

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const prepare = (el) => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";
      const tag = el.tagName.toLowerCase();
      el.classList.add("rv");
      if (tag === "img") {
        el.classList.add("rv-img");
      } else if (tag === "li") {
        el.classList.add("rv-li");
        const siblings = el.parentElement ? el.parentElement.children : [];
        const idx = Array.prototype.indexOf.call(siblings, el);
        el.style.setProperty("--rv-i", String(Math.min(Math.max(idx, 0), 8)));
      } else if (["h1", "h2", "h3", "h4"].includes(tag)) {
        el.classList.add("rv-up");
      } else {
        el.classList.add("rv-fade");
      }
      io.observe(el);
    };

    const scan = (node) => {
      if (!node || node.nodeType !== 1) return;
      if (node.closest && node.closest("nav, footer, [data-no-reveal]")) return;
      if (node.matches && node.matches(REVEAL_SELECTOR)) prepare(node);
      if (node.querySelectorAll) {
        node.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
          if (!el.closest("nav, footer, [data-no-reveal]")) prepare(el);
        });
      }
    };

    scan(root);

    // Inner pages are lazy-loaded; catch content as it mounts.
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => m.addedNodes.forEach((n) => scan(n)));
    });
    mo.observe(root, { childList: true, subtree: true });

    // Safety net: never leave content stuck hidden.
    const t = setTimeout(() => {
      root
        .querySelectorAll(".rv:not(.in)")
        .forEach((el) => el.classList.add("in"));
    }, 2200);

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(t);
    };
  }, [location.pathname]);

  return (
    <div ref={rootRef} className="inner-page">
      <Outlet />
    </div>
  );
};

export default InnerLayout;
