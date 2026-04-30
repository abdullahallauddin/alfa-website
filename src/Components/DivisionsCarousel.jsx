import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Factory,
  HardHat,
  Shield,
  ShieldCheck,
  Ship,
  Sun,
} from "lucide-react";

const ICON_MAP = {
  ship: Ship,
  factory: Factory,
  hardhat: HardHat,
  sun: Sun,
  shield: Shield,
  shieldcheck: ShieldCheck,
};

const SWIPE_THRESHOLD = 70;

const DivisionsCarousel = ({ divisions = [] }) => {
  const total = divisions.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const viewportRef = useRef(null);

  const goTo = useCallback(
    (idx) => {
      if (!total) return;
      const next = ((idx % total) + total) % total;
      setActiveIndex(next);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return undefined;

    const onKey = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };

    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const cards = useMemo(
    () =>
      divisions.map((division, index) => {
        const offset = index - activeIndex;
        const absOffset = Math.abs(offset);
        const isActive = offset === 0;
        const Icon = ICON_MAP[division.icon] ?? Ship;

        return {
          division,
          index,
          offset,
          absOffset,
          isActive,
          Icon,
        };
      }),
    [divisions, activeIndex]
  );

  if (!total) return null;

  return (
    <div className="alfa-divisions-carousel" aria-roledescription="carousel">
      <div
        className="alfa-divisions-carousel__viewport"
        ref={viewportRef}
        tabIndex={0}
        role="group"
        aria-label="Our divisions carousel"
      >
        <motion.div
          className="alfa-divisions-carousel__track"
          drag="x"
          dragMomentum={false}
          dragElastic={0.16}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_THRESHOLD) goNext();
            else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
          }}
        >
          {cards.map(({ division, index, offset, absOffset, isActive, Icon }) => {
            const visible = absOffset <= 2;
            const translate = offset * 100;
            const scale = isActive ? 1 : absOffset === 1 ? 0.84 : 0.7;
            const opacity = isActive ? 1 : absOffset === 1 ? 0.55 : 0.18;
            const blur = isActive ? 0 : absOffset === 1 ? 1.5 : 3;
            const cardTransition = prefersReducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 140, damping: 24, mass: 0.9 };

            return (
              <motion.article
                key={division.title}
                className={`carousel-card${isActive ? " is-active" : ""}`}
                aria-hidden={!isActive}
                style={{
                  zIndex: 10 - absOffset,
                  pointerEvents: visible ? "auto" : "none",
                }}
                initial={false}
                animate={{
                  x: `calc(${translate}% * var(--card-step-ratio, 0.78))`,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={cardTransition}
                onClick={() => {
                  if (!isActive) goTo(index);
                }}
              >
                <Link
                  to={division.path}
                  className="carousel-card__link"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`${division.title} division — open page`}
                  onClick={(event) => {
                    if (!isActive) {
                      event.preventDefault();
                      goTo(index);
                    }
                  }}
                  draggable={false}
                >
                  <img
                    src={division.image}
                    alt={division.imageAlt}
                    className="carousel-card__image"
                    loading={absOffset <= 1 ? "eager" : "lazy"}
                    draggable={false}
                  />
                  <span className="carousel-card__overlay" aria-hidden="true" />

                  <div className="carousel-card__top">
                    <span className="carousel-card__icon" aria-hidden="true">
                      <Icon strokeWidth={1.4} />
                    </span>
                    <span className="carousel-card__eyebrow">{division.eyebrow}</span>
                  </div>

                  <div className="carousel-card__content">
                    <h3>{division.title}</h3>
                    {isActive ? (
                      <p className="carousel-card__summary">{division.summary}</p>
                    ) : null}
                    <span className="carousel-card__cta">
                      Know More
                      <ArrowUpRight size={16} strokeWidth={2.2} />
                    </span>
                  </div>

                  <div className="carousel-card__panel" aria-hidden="true">
                    <span className="carousel-card__panel-text">
                      {division.shortTitle ?? division.title}
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <div className="alfa-divisions-carousel__controls" role="group" aria-label="Carousel controls">
        <button
          type="button"
          className="alfa-divisions-carousel__arrow"
          onClick={goPrev}
          aria-label="Previous division"
        >
          <ChevronLeft strokeWidth={2} />
        </button>

        <div className="alfa-divisions-carousel__dots" role="tablist" aria-label="Select division">
          {divisions.map((division, index) => (
            <button
              key={division.title}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${division.shortTitle ?? division.title}`}
              className={`alfa-divisions-carousel__dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="alfa-divisions-carousel__arrow"
          onClick={goNext}
          aria-label="Next division"
        >
          <ChevronRight strokeWidth={2} />
        </button>
      </div>

      <p className="alfa-divisions-carousel__count" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <span aria-hidden="true"> / </span>
        <span>{String(total).padStart(2, "0")}</span>
      </p>
    </div>
  );
};

export default DivisionsCarousel;
