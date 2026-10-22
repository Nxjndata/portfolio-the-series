import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { EASE } from './fx';
import ProjectCard from './ProjectCard';

export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [progress, setProgress] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const didDrag = useRef(false);

  const checkScroll = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 16);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 16);
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scrollByCards = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.72, 640);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const el = railRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    didDrag.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = railRef.current;
    if (!el) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 6) {
      didDrag.current = true;
      el.scrollLeft = startScrollLeft.current - dx;
    }
  };

  const onPointerUp = () => {
    isDragging.current = false;
    setTimeout(() => {
      didDrag.current = false;
    }, 80);
  };

  // Seamless scroll handling:
  // Native trackpad horizontal gestures scroll the rail with 120 FPS momentum.
  // Shift + mouse wheel scrolls horizontally; pure vertical scroll moves through the page naturally.
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If user holds Shift with standard mouse wheel, scroll horizontally
      if (e.shiftKey && Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
      // Native trackpad sideways swipe (deltaX) is handled natively by the browser at 120 FPS
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <section className="relative py-12 sm:py-16">
      {/* Header with Title and Scroll Controls */}
      <div className="gutter mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
            <span className="h-px w-8 bg-crimson-2" />
            {projects.length} Productions · 2025–2026
          </div>
          <h2 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.88] text-bone">
            ORIGINALS
          </h2>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-mist sm:text-[15px]">
            Fintech architectures, algorithmic execution engines, checkout teardowns, and 0→1 institutional adoption playbooks.
          </p>
        </div>

        {/* Desktop Navigation Arrow Controls */}
        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={!canLeft}
            aria-label="Previous originals"
            className={`flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition duration-200 ${
              canLeft
                ? 'border-white/20 bg-ink-2/90 text-bone hover:border-crimson hover:bg-crimson hover:text-white'
                : 'cursor-not-allowed border-white/10 bg-ink-2/30 text-smoke/30'
            }`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={!canRight}
            aria-label="Next originals"
            className={`flex h-12 w-12 items-center justify-center rounded-full border text-2xl transition duration-200 ${
              canRight
                ? 'border-white/20 bg-ink-2/90 text-bone hover:border-crimson hover:bg-crimson hover:text-white'
                : 'cursor-not-allowed border-white/10 bg-ink-2/30 text-smoke/30'
            }`}
          >
            ›
          </button>
        </div>
      </div>

      {/* Horizontal Rail Container */}
      <div className="group/rail relative">
        {/* Floating Left Page Arrow */}
        {canLeft && (
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll left"
            className="absolute bottom-8 left-0 top-0 z-20 hidden w-16 items-center justify-start bg-gradient-to-r from-ink via-ink/80 to-transparent pl-4 text-3xl text-bone transition hover:text-white lg:flex"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink-2/95 text-2xl shadow-2xl transition hover:border-crimson hover:bg-crimson">
              ‹
            </span>
          </button>
        )}

        {/* Floating Right Page Arrow */}
        {canRight && (
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll right"
            className="absolute bottom-8 right-0 top-0 z-20 hidden w-16 items-center justify-end bg-gradient-to-l from-ink via-ink/80 to-transparent pr-4 text-3xl text-bone transition hover:text-white lg:flex"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink-2/95 text-2xl shadow-2xl transition hover:border-crimson hover:bg-crimson">
              ›
            </span>
          </button>
        )}

        {/* Pure Horizontal Rail — Trackpad sideways scrolling works natively with 0 vertical hijacking */}
        <div
          ref={railRef}
          data-lenis-prevent="true"
          className="rail gutter flex snap-x snap-proximity gap-6 overflow-x-auto pb-6 pt-1 select-none cursor-grab active:cursor-grabbing"
          data-cursor="drag"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {projects.map((p, i) => (
            <div key={p.id} className="w-[84vw] shrink-0 snap-start sm:w-[56vw] lg:w-[42vw] xl:w-[38vw]">
              <ProjectCard
                project={p}
                index={i}
                onOpen={() => {
                  if (!didDrag.current) onOpen(p);
                }}
              />
            </div>
          ))}
          <div className="shrink-0 snap-start">
            <Outro />
          </div>
        </div>

        {/* Bottom Horizontal Progress Bar */}
        <div className="gutter mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">ORIGINALS</span>
            <span className="hidden text-[10px] font-medium tracking-[0.2em] text-smoke/70 sm:inline">
              SWIPE SIDEWAYS ON TRACKPAD ↔
            </span>
          </div>
          <div className="h-[2px] w-48 overflow-hidden rounded bg-white/10 sm:w-64">
            <motion.div
              className="h-full origin-left bg-crimson"
              style={{ transform: `scaleX(${progress})`, transformOrigin: 'left' }}
              transition={{ ease: EASE }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      data-cursor="link"
      className="group flex aspect-[3/4] w-[70vw] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 text-center transition hover:border-crimson-2/60 sm:w-[44vw] lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-2xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2">
        ↗
      </span>
      <span className="font-display text-3xl tracking-wide text-bone">More on GitHub</span>
      <span className="text-xs text-mist">{profile.links.github.replace('https://', '')}</span>
    </a>
  );
}
