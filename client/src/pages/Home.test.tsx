// @vitest-environment jsdom
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

const scrollIntoView = vi.fn();
const { locomotiveScrollTo } = vi.hoisted(() => ({ locomotiveScrollTo: vi.fn() }));

vi.mock("@/hooks/useLocomotiveScroll", () => ({
  useLocomotiveScroll: () => locomotiveScrollTo,
}));

beforeEach(() => {
  Element.prototype.scrollIntoView = scrollIntoView;
  window.open = vi.fn();
  locomotiveScrollTo.mockReturnValue(false);
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("AapnoGhar homepage interactions", () => {
  it("exposes the skip link, page landmarks, and verified footer links", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Skip to content" }).getAttribute("href")).toBe("#main-content");
    expect(screen.getByRole("main").getAttribute("id")).toBe("main-content");
    expect(document.body.contains(screen.getByRole("contentinfo"))).toBe(true);
    expect(screen.getByRole("link", { name: /privacy policy/i }).getAttribute("href")).toBe("https://www.aapnoghar.com/privacy-policy");
    expect(screen.getAllByRole("link", { name: /instagram/i }).length).toBeGreaterThan(0);
  });

  it("opens mobile navigation and routes an item through smooth section navigation", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const menuButton = screen.getByRole("button", { name: "Open navigation" });
    await user.click(menuButton);
    expect(menuButton.getAttribute("aria-expanded")).toBe("true");

    const experienceButtons = screen.getAllByRole("button", { name: "Experiences" });
    await user.click(experienceButtons[experienceButtons.length - 1]!);
    expect(scrollIntoView).toHaveBeenCalled();
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("routes header and mobile section navigation through Locomotive Scroll when active", async () => {
    const user = userEvent.setup();
    locomotiveScrollTo.mockReturnValue(true);
    render(<Home />);

    await user.click(screen.getAllByRole("button", { name: "Experiences" })[0]!);
    expect(locomotiveScrollTo).toHaveBeenCalledWith(expect.objectContaining({ id: "experiences" }));
    expect(scrollIntoView).not.toHaveBeenCalled();

    const menuButton = screen.getByRole("button", { name: "Open navigation" });
    await user.click(menuButton);
    const experienceButtons = screen.getAllByRole("button", { name: "Experiences" });
    await user.click(experienceButtons[experienceButtons.length - 1]!);
    expect(locomotiveScrollTo).toHaveBeenCalledTimes(2);
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("opens, validates, closes, and submits the WhatsApp booking modal", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(screen.getByRole("button", { name: /book a day visit/i }));
    expect(document.body.contains(screen.getByRole("dialog"))).toBe(true);

    await user.click(screen.getByRole("button", { name: /continue on whatsapp/i }));
    expect(document.body.contains(screen.getByText("Choose your preferred date."))).toBe(true);

    await user.type(screen.getByLabelText(/preferred date/i), "2026-08-22");
    await user.type(screen.getByLabelText(/your name/i), "Aarav Sharma");
    await user.type(screen.getByLabelText(/mobile number/i), "7666779997");
    await user.click(screen.getByRole("button", { name: /continue on whatsapp/i }));
    expect(window.open).toHaveBeenCalledWith(expect.stringContaining("https://wa.me/917666779997?text="), "_blank", "noopener,noreferrer");

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("keeps primary controls keyboard reachable and moves focus into the dialog", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole("link", { name: "Skip to content" }));

    await user.click(screen.getByRole("button", { name: /book a day visit/i }));
    await new Promise(resolve => window.setTimeout(resolve, 0));
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Close booking form" }));

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("supports keyboard activation for header navigation, WhatsApp CTA, and menu trigger", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const desktopExperience = screen.getAllByRole("button", { name: "Experiences" })[0]!;
    desktopExperience.focus();
    expect(document.activeElement).toBe(desktopExperience);
    await user.keyboard("{Enter}");
    expect(scrollIntoView).toHaveBeenCalled();

    const whatsappCta = screen.getByRole("button", { name: /whatsapp us/i });
    whatsappCta.focus();
    expect(document.activeElement).toBe(whatsappCta);
    await user.keyboard("{Enter}");
    expect(document.body.contains(screen.getByRole("dialog"))).toBe(true);
    await user.keyboard("{Escape}");

    const menuButton = screen.getByRole("button", { name: "Open navigation" });
    menuButton.focus();
    expect(document.activeElement).toBe(menuButton);
    await user.keyboard("{Enter}");
    expect(menuButton.getAttribute("aria-expanded")).toBe("true");
  });

  it("toggles FAQ entries with accessible expanded states", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const timings = screen.getByRole("button", { name: "What are the park timings?" });
    expect(timings.getAttribute("aria-expanded")).toBe("true");
    await user.click(timings);
    expect(timings.getAttribute("aria-expanded")).toBe("false");

    const pricing = screen.getByRole("button", { name: "How does height-based pricing work?" });
    await user.click(pricing);
    expect(pricing.getAttribute("aria-expanded")).toBe("true");
    expect(document.body.contains(screen.getByText(/Kids below 33 inches are complimentary/i))).toBe(true);
  });
});
