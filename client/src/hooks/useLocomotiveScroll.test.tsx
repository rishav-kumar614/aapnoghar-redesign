// @vitest-environment jsdom
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { useLocomotiveScroll } from "./useLocomotiveScroll";

const { scrollTo, destroy, LocomotiveScrollMock } = vi.hoisted(() => {
  const scrollTo = vi.fn();
  const destroy = vi.fn();
  const LocomotiveScrollMock = vi.fn().mockImplementation(() => ({ scrollTo, destroy }));
  return { scrollTo, destroy, LocomotiveScrollMock };
});

vi.mock("locomotive-scroll", () => ({ default: LocomotiveScrollMock }));

function ScrollProbe() {
  const locomotiveScrollTo = useLocomotiveScroll();
  return <button type="button" onClick={() => locomotiveScrollTo("#stay")}>Scroll to stay</button>;
}

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({ matches: false }) });
  Object.defineProperty(window, "ResizeObserver", { configurable: true, value: class {} });
});

afterEach(() => {
  cleanup();
  document.documentElement.classList.remove("locomotive-ready");
});

describe("useLocomotiveScroll", () => {
  it("creates Locomotive Scroll and delegates programmatic navigation", () => {
    render(<ScrollProbe />);

    expect(LocomotiveScrollMock).toHaveBeenCalledTimes(1);
    expect(document.documentElement.classList.contains("locomotive-ready")).toBe(true);
    screen.getByRole("button", { name: "Scroll to stay" }).click();
    expect(scrollTo).toHaveBeenCalledWith("#stay", { offset: -82, duration: 0.85 });
  });

  it("keeps native scrolling available when reduced motion is requested", () => {
    Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({ matches: true }) });
    render(<ScrollProbe />);

    expect(LocomotiveScrollMock).not.toHaveBeenCalled();
    screen.getByRole("button", { name: "Scroll to stay" }).click();
    expect(scrollTo).not.toHaveBeenCalled();
  });
});
