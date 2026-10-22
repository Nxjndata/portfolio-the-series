import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = { view: 'VIEW', play: '▶', link: '↗', drag: '↔', close: '✕' };

/**
 * High-performance 120 FPS cursor: direct hardware transform tracking with zero input lag.
 * Desktop only; disabled for reduced motion or touch screens.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');
    const el = cursorRef.current;
    let curMode: string | null = null;
    let curHover = false;
    let isVis = false;
    let rafId: number | null = null;
    let pendingTarget: HTMLElement | null = null;

    const checkHover = () => {
      rafId = null;
      if (!pendingTarget) return;
      const t = pendingTarget;
      const tagged = t.closest<HTMLElement>('[data-cursor]');
      const nextMode = tagged?.dataset.cursor ?? null;
      const nextHover = !tagged && !!t.closest('a,button,[role="button"]');
      if (nextMode !== curMode) {
        curMode = nextMode;
        setMode(nextMode);
      }
      if (nextHover !== curHover) {
        curHover = nextHover;
        setHoverLink(nextHover);
      }
    };

    const move = (e: PointerEvent) => {
      if (el) {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (!isVis) {
        isVis = true;
        setVisible(true);
      }
      pendingTarget = e.target as HTMLElement | null;
      if (!rafId) {
        rafId = requestAnimationFrame(checkHover);
      }
    };

    const leave = () => {
      isVis = false;
      setVisible(false);
    };
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled]);

  if (!enabled) return null;
  const label = mode ? LABELS[mode] : null;
  const targetSize = label ? (mode === 'view' ? 72 : 54) : hoverLink ? 34 : 10;
  const scale = targetSize / 64;

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.15s ease',
      }}
    >
      <motion.div
        className="flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full will-change-transform"
        animate={{
          scale: down ? scale * 0.86 : scale,
          backgroundColor: label ? 'rgba(229,19,43,0.94)' : hoverLink ? 'rgba(244,241,236,0.1)' : 'rgba(244,241,236,1)',
          borderColor: hoverLink && !label ? 'rgba(244,241,236,0.7)' : 'rgba(244,241,236,0)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        <span className="absolute inset-0 rounded-full border" style={{ borderColor: 'inherit' }} />
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
