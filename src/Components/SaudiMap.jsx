import React from "react";
import { PROVINCES, SA_VIEWBOX } from "../data/saudiProvinces";

// Province-level Saudi Arabia map. When `activeRegion` (e.g. "SA-04") is set,
// that province is elevated (lifted, brightened, shadowed) above the rest.
const SaudiMap = ({ className, activeRegion }) => {
  // Render the active province last so its lift/shadow paints above neighbours.
  const ordered = [
    ...PROVINCES.filter((p) => p.id !== activeRegion),
    ...PROVINCES.filter((p) => p.id === activeRegion),
  ];

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox={SA_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="saFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#27437d" />
            <stop offset="55%" stopColor="#1b3160" />
            <stop offset="100%" stopColor="#13264a" />
          </linearGradient>
          <linearGradient id="saFillActive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#54a0e0" />
            <stop offset="100%" stopColor="#2C76c0" />
          </linearGradient>
        </defs>

        {ordered.map((p) => {
          const active = p.id === activeRegion;
          return (
            <path
              key={p.id}
              d={p.d}
              fill={active ? "url(#saFillActive)" : "url(#saFill)"}
              stroke={active ? "#9fd0f5" : "#2C95D2"}
              strokeOpacity={active ? 0.95 : 0.35}
              strokeWidth={active ? 1.6 : 0.8}
              strokeLinejoin="round"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                transform: active ? "translateY(-12px) scale(1.03)" : "none",
                filter: active
                  ? "drop-shadow(0 12px 14px rgba(0,0,0,0.55)) drop-shadow(0 0 12px rgba(44,149,210,0.55))"
                  : "none",
                opacity: activeRegion && !active ? 0.7 : 1,
                transition:
                  "transform .5s cubic-bezier(.22,1,.36,1), filter .5s ease, fill .5s ease, opacity .5s ease, stroke-opacity .5s ease",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SaudiMap;
