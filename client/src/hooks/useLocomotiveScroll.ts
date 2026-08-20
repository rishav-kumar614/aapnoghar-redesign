import { useCallback, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

type ScrollTarget = HTMLElement | string;

type LocomotiveController = {
  scrollTo: (target: ScrollTarget, options?: { offset?: number; duration?: number }) => void;
  destroy: () => void;
};

export function useLocomotiveScroll() {
  const controllerRef = useRef<LocomotiveController | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    reducedMotionRef.current = prefersReducedMotion;
    if (prefersReducedMotion || !("ResizeObserver" in window)) return;

    // Initialize ultra-smooth inertial scrolling
    const controller = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.09,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.6,
        smoothWheel: true,
        syncTouch: false,
        autoResize: true,
      },
    }) as unknown as LocomotiveController;

    controllerRef.current = controller;
    document.documentElement.classList.add("locomotive-ready");
    return () => {
      controller.destroy();
      controllerRef.current = null;
      document.documentElement.classList.remove("locomotive-ready");
    };
  }, []);

  return useCallback((target: ScrollTarget, offset = -70) => {
    if (reducedMotionRef.current || !controllerRef.current) return false;
    controllerRef.current.scrollTo(target, { offset, duration: 0.75 });
    return true;
  }, []);
}
