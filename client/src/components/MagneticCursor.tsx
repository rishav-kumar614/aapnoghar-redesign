import React, { useEffect, useRef, useState } from "react";

export function MagneticCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktops with fine pointers
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let hasMoved = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        currentX = mouseX;
        currentY = mouseY;
        setIsVisible(true);
      }

      // Check if hovering interactive elements for gentle scale
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("button, a, input, select, textarea, [role='button']") as HTMLElement | null;
      setIsHovered(!!interactiveEl);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      hasMoved = false;
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const render = () => {
      if (hasMoved) {
        const ease = 0.22;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorDotRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-[opacity,transform,width,height] duration-200 ease-out will-change-transform rounded-full ${
        !isVisible ? "opacity-0" : "opacity-100"
      } ${
        isHovered
          ? "w-8 h-8 bg-[#01A5E1]/20 border border-[#01A5E1]/80 backdrop-blur-[1px] shadow-[0_0_12px_rgba(1,165,225,0.4)]"
          : "w-3 h-3 bg-[#F68734] shadow-[0_0_10px_rgba(246,135,52,0.8)]"
      }`}
      style={{ transform: "translate3d(-200px, -200px, 0)" }}
    />
  );
}
