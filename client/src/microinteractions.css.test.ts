import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync(new URL("./index.css", import.meta.url), "utf8");

describe("micro-interaction styles", () => {
  it("gates hover-only motion to precise pointer devices and avoids unbounded transitions", () => {
    expect(css).toContain("@media (hover: hover) and (pointer: fine)");
    expect(css).not.toContain("transition: all");
    expect(css).toContain(".button { display: inline-flex");
    expect(css).not.toContain("transition: transform .16s cubic-bezier(.23, 1, .32, 1), background-color");
    expect(css).toContain(".experience-card:hover, .room-card:hover, .venue-card:hover { transform: translate3d(0, -5px, 0); }");
  });

  it("preserves active feedback and reduced-motion safeguards", () => {
    expect(css).toContain(".button:active { transform: scale(.97); }");
    expect(css).toContain(".faq-item button:active { transform: scale(.99); }");
    expect(css).toContain(".desktop-nav button:active, .footer-grid button:active, .footer-grid a:active, .footer-bottom a:active, .social-links a:active { transform: scale(.96); }");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("transition-duration: .01ms !important");
  });
});
