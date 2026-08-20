// @vitest-environment jsdom
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { TicketEstimator } from "../TicketEstimator";

afterEach(() => {
  cleanup();
});

describe("TicketEstimator Component", () => {
  it("renders with default weekday rates and guest counts", () => {
    const handleBook = vi.fn();
    render(<TicketEstimator onBook={handleBook} />);

    // Header title
    expect(screen.getByText("Estimate Your Visit & Package")).toBeTruthy();
    // Default 2 Adults calculation (2 * 1199 = 2398) + 1 Child (899) = 3297 + 18% GST (593) = 3890
    expect(screen.getByText("2 × Adult Passes (weekday)")).toBeTruthy();
  });

  it("updates rates when toggling to Weekend", () => {
    const handleBook = vi.fn();
    render(<TicketEstimator onBook={handleBook} />);

    const weekendBtn = screen.getByText("Weekend & Holidays");
    fireEvent.click(weekendBtn);

    // Rate updates to 2 × Adult Passes (weekend)
    expect(screen.getByText("2 × Adult Passes (weekend)")).toBeTruthy();
  });

  it("triggers onBook callback with summary intent when clicking Lock In Rate", () => {
    const handleBook = vi.fn();
    render(<TicketEstimator onBook={handleBook} />);

    const bookBtn = screen.getByRole("button", { name: /Lock In Rate & Book Now/i });
    fireEvent.click(bookBtn);

    expect(handleBook).toHaveBeenCalledTimes(1);
    expect(handleBook).toHaveBeenCalledWith(expect.stringContaining("Weekday Visit"));
  });
});
