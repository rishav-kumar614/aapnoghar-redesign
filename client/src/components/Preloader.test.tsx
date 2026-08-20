// @vitest-environment jsdom
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { Preloader } from "./Preloader";

beforeEach(() => {
  vi.useFakeTimers();
  Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({ matches: false }) });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Preloader", () => {
  it("shows a brief loading state, fades out, and then unmounts", () => {
    render(<Preloader />);
    const preloader = screen.getByRole("status", { name: "Loading AapnoGhar" });

    act(() => vi.advanceTimersByTime(460));
    expect(preloader.classList.contains("preloader--leaving")).toBe(true);

    act(() => vi.advanceTimersByTime(180));
    expect(screen.queryByRole("status", { name: "Loading AapnoGhar" })).toBeNull();
  });

  it("does not linger when reduced motion is requested", () => {
    Object.defineProperty(window, "matchMedia", { configurable: true, value: vi.fn().mockReturnValue({ matches: true }) });
    render(<Preloader />);

    act(() => vi.runAllTimers());
    expect(screen.queryByRole("status", { name: "Loading AapnoGhar" })).toBeNull();
  });
});
