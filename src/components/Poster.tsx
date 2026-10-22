import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />

        {/* Vector Trading Engine: Risk gates shield & latency execution circuit */}
        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}

        {/* Arata Checkout Teardown: Funnel wireframe, COD breakdown modal */}
        {project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M114 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="176" cy="16" r="16" fill={a} fillOpacity="0.25" stroke={a} strokeWidth="2" />
            </g>
          </g>
        )}

        {/* Alphabot: AI neural network & momentum price curve */}
        {project.motif === 'bot' && (
          <g fill="none" stroke={a}>
            <path d="M170 210 Q 220 180, 260 195 T 320 140 T 380 90" strokeWidth="3.5" strokeOpacity="0.9" strokeLinecap="round" />
            <circle cx="380" cy="90" r="7" fill={a} />
            <circle cx="320" cy="140" r="5" fill={a} fillOpacity="0.5" />
            <circle cx="260" cy="195" r="5" fill={a} fillOpacity="0.5" />
            <g transform="translate(240 50)" strokeWidth="1.5" strokeOpacity="0.6">
              <rect x="0" y="0" width="100" height="60" rx="8" />
              <circle cx="30" cy="30" r="8" fill={a} fillOpacity="0.4" />
              <circle cx="70" cy="30" r="8" fill={a} fillOpacity="0.4" />
              <path d="M40 45 Q 50 50, 60 45" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        )}

        {/* Financial Data Pipeline: Distributed stream node architecture */}
        {project.motif === 'pipeline' && (
          <g fill="none" stroke={a}>
            <path d="M180 80 H 260 V 150 H 340 V 220 H 390" strokeWidth="3" strokeDasharray="8 6" strokeOpacity="0.8" />
            <rect x="160" y="65" width="40" height="30" rx="4" strokeWidth="2" fill={a} fillOpacity="0.2" />
            <rect x="240" y="135" width="40" height="30" rx="4" strokeWidth="2" fill={a} fillOpacity="0.2" />
            <rect x="320" y="205" width="40" height="30" rx="4" strokeWidth="2" fill={a} fillOpacity="0.2" />
            <circle cx="390" cy="220" r="6" fill={a} />
          </g>
        )}

        {/* Navi UPI Receiver Mode: Smartphone outline, QR widget, floating bubble & confirmation */}
        {project.motif === 'receiver' && (
          <g fill="none" stroke={a}>
            {/* Floating bubble with pulse rings */}
            <circle cx="150" cy="85" r="28" strokeWidth="2" strokeOpacity="0.8" fill={a} fillOpacity="0.15" />
            <circle cx="150" cy="85" r="38" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <path d="M142 77 h16 v16 h-16 Z M146 81 h8 v8 h-8 Z" fill={a} stroke="none" />

            {/* Android Device / Always-on Widget Frame */}
            <rect x="210" y="40" width="150" height="204" rx="20" strokeWidth="2" strokeOpacity="0.85" />
            <circle cx="285" cy="52" r="3" fill={a} stroke="none" />

            {/* Always-on QR Widget Box */}
            <rect x="230" y="66" width="110" height="96" rx="10" strokeWidth="1.5" strokeOpacity="0.6" fill={a} fillOpacity="0.1" />

            {/* QR Finder patterns */}
            <rect x="242" y="76" width="22" height="22" rx="3" strokeWidth="2" strokeOpacity="0.9" />
            <rect x="248" y="82" width="10" height="10" rx="1.5" fill={a} stroke="none" />

            <rect x="306" y="76" width="22" height="22" rx="3" strokeWidth="2" strokeOpacity="0.9" />
            <rect x="312" y="82" width="10" height="10" rx="1.5" fill={a} stroke="none" />

            <rect x="242" y="130" width="22" height="22" rx="3" strokeWidth="2" strokeOpacity="0.9" />
            <rect x="248" y="136" width="10" height="10" rx="1.5" fill={a} stroke="none" />

            {/* QR dots */}
            <circle cx="282" cy="98" r="3" fill={a} stroke="none" />
            <circle cx="294" cy="110" r="3" fill={a} stroke="none" />
            <circle cx="276" cy="120" r="3" fill={a} stroke="none" />
            <circle cx="314" cy="136" r="3" fill={a} stroke="none" />

            {/* Instant Payment Confirmation Pill */}
            <rect x="230" y="174" width="110" height="34" rx="8" strokeWidth="1.5" strokeOpacity="0.9" fill={a} fillOpacity="0.25" />
            <path d="M244 191 l5 5 l11 -11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="268" y="195" fill="#ffffff" stroke="none" fontSize="10" fontWeight="bold" fontFamily="system-ui, sans-serif">
              ₹ Received
            </text>
          </g>
        )}

        {/* CoinDCX Institutional 0→1: Multi-tenant grid & volume escalation */}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
      </svg>

      {/* Floating brand badge watermark */}
      {project.logo && (
        <div className="pointer-events-none absolute right-6 top-14 z-[3] sm:right-9 sm:top-16">
          <div
            className="flex items-center justify-center overflow-hidden rounded-2xl border border-white/20 p-2 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-105"
            style={{
              background: 'rgba(8, 10, 18, 0.72)',
              boxShadow: `0 16px 36px -6px ${a}45`,
            }}
          >
            <img
              src={project.logo}
              alt={project.brand || project.title}
              className="h-13 w-13 rounded-xl object-cover sm:h-16 sm:w-16 ring-1 ring-white/15"
            />
          </div>
        </div>
      )}
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 36" className="h-[1.15em] w-auto" fill="none" aria-hidden>
        <defs>
          <linearGradient id="markOrangeDot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b4a" />
            <stop offset="100%" stopColor="#ff4218" />
          </linearGradient>
          <mask id="markKMaskTall">
            <rect width="48" height="36" fill="#ffffff" />
            <circle cx="37" cy="27" r="5.2" fill="#000000" />
          </mask>
        </defs>
        <g fill="#ffffff">
          <polygon points="3,34 3,2 8.2,2 16.5,23.5 16.5,2 21.5,2 21.5,34 16.3,34 8,12.5 8,34" />
          <g mask="url(#markKMaskTall)">
            <rect x="25.5" y="2" width="5.2" height="32" />
            <polygon points="28.5,19 39.5,2 45.5,2 32,21.5" />
            <polygon points="30.5,15.5 45,34 38.5,34 26.5,19" />
          </g>
        </g>
        <circle cx="37" cy="27" r="2.9" fill="url(#markOrangeDot)" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
