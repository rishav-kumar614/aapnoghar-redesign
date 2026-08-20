import React, { useEffect, useState } from "react";

type PreloaderPhase = "loading" | "leaving" | "hidden";

export function Preloader() {
  const [phase, setPhase] = useState<PreloaderPhase>("loading");

  useEffect(() => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const linger = reducedMotion ? 0 : 460;
    const exitDuration = reducedMotion ? 0 : 180;
    const exitTimer = window.setTimeout(() => setPhase("leaving"), linger);
    const hideTimer = window.setTimeout(() => setPhase("hidden"), linger + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className={`preloader ${phase === "leaving" ? "preloader--leaving" : ""}`} role="status" aria-live="polite" aria-label="Loading AapnoGhar">
      <div className="preloader__inner">
        <div className="preloader__brand" aria-hidden="true">
          <img src="/images/logo.png" alt="AapnoGhar" className="h-14 w-auto object-contain mb-2" />
        </div>
        <div className="preloader__orbit" aria-hidden="true"><span /></div>
        <p>Arriving at your good story.</p>
      </div>
    </div>
  );
}
