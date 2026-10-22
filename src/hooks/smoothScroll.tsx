import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from 'react';

type ScrollApi = {
  scrollTo: (target: string | HTMLElement | number, opts?: { offset?: number; immediate?: boolean }) => void;
  lock: () => void;
  unlock: () => void;
};

const ScrollCtx = createContext<ScrollApi | null>(null);

/**
 * High-Performance Native Smooth Scroll Provider.
 * Eliminates all software wheel interception and input lag.
 * Relies directly on the browser/GPU hardware engine for 120 FPS silky-smooth scrolling.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const locks = useRef(0);

  const scrollTo = useCallback<ScrollApi['scrollTo']>((target, opts = {}) => {
    const offset = opts.offset ?? -72;
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: opts.immediate ? 'auto' : 'smooth',
      });
      return;
    }

    const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: opts.immediate ? 'auto' : 'smooth',
    });
  }, []);

  const lock = useCallback(() => {
    locks.current += 1;
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    locks.current = Math.max(0, locks.current - 1);
    if (locks.current === 0) {
      document.documentElement.style.overflow = '';
    }
  }, []);

  return <ScrollCtx.Provider value={{ scrollTo, lock, unlock }}>{children}</ScrollCtx.Provider>;
}

export function useSmoothScroll() {
  const ctx = useContext(ScrollCtx);
  if (!ctx) throw new Error('useSmoothScroll must be used inside SmoothScrollProvider');
  return ctx;
}

/** Locks page scroll while `active` is true (used by overlays and modals). */
export function useScrollLock(active: boolean) {
  const { lock, unlock } = useSmoothScroll();
  useEffect(() => {
    if (!active) return;
    lock();
    return unlock;
  }, [active, lock, unlock]);
}
