// @vitest-environment jsdom
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { useScrollReveal } from "./useScrollReveal";

type ObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: ObserverCallback;
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: ObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }
}

function RevealProbe() {
  useScrollReveal();
  return <div data-reveal data-testid="reveal-probe" />;
}

beforeEach(() => {
  MockIntersectionObserver.instances = [];
  Object.defineProperty(window, "IntersectionObserver", { configurable: true, value: MockIntersectionObserver });
  Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({ matches: false }) });
});

afterEach(() => {
  cleanup();
  document.documentElement.classList.remove("motion-ready");
});

describe("useScrollReveal", () => {
  it("reveals an observed target once it enters the viewport", () => {
    render(<RevealProbe />);
    const target = screen.getByTestId("reveal-probe");
    const observer = MockIntersectionObserver.instances[0]!;

    expect(document.documentElement.classList.contains("motion-ready")).toBe(true);
    expect(observer.observe).toHaveBeenCalledWith(target);

    act(() => observer.callback([{ isIntersecting: true, target } as unknown as IntersectionObserverEntry], observer as unknown as IntersectionObserver));
    expect(target.classList.contains("is-visible")).toBe(true);
    expect(observer.unobserve).toHaveBeenCalledWith(target);
  });

  it("reveals all motion targets without observer-driven movement when reduced motion is requested", () => {
    Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({ matches: true }) });
    render(<RevealProbe />);

    expect(screen.getByTestId("reveal-probe").classList.contains("is-visible")).toBe(true);
    expect(MockIntersectionObserver.instances).toHaveLength(0);
  });
});
