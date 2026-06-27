import { useEffect } from "react";

/**
 * Enables click-and-drag horizontal scrolling on a scroll container (mouse
 * only — touch/pen keep native scrolling). Suppresses the click that follows a
 * drag so links inside the carousel don't navigate when you were just panning.
 */
export default function useDragScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;

    const onDown = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return; // native touch scroll
      if (e.button !== 0) return; // left button only
      isDown = true;
      moved = false;
      startX = e.pageX;
      startLeft = el.scrollLeft;
      el.classList.add("cursor-grabbing");
      // Disable scroll-snap during the drag so it pans smoothly (it snaps back
      // into place on release for snap-based carousels).
      el.style.scrollSnapType = "none";
      // Stop the browser from starting a text selection / image drag.
      e.preventDefault();
    };

    const onDragStart = (e) => {
      if (isDown) e.preventDefault();
    };

    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
      e.preventDefault();
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove("cursor-grabbing");
      el.style.scrollSnapType = ""; // restore CSS-defined snapping
    };

    // Cancel the click that fires right after a drag (capture phase).
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [ref]);
}
