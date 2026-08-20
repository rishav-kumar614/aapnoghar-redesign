import { describe, expect, it } from "vitest";
import { createWhatsAppBookingMessage, isValidIndianPhone } from "./booking";

describe("booking helpers", () => {
  it("accepts a ten-digit Indian mobile number regardless of formatting", () => {
    expect(isValidIndianPhone("76667 79997")).toBe(true);
    expect(isValidIndianPhone("+91 7666779997")).toBe(false);
    expect(isValidIndianPhone("76667799")).toBe(false);
  });

  it("creates a complete WhatsApp confirmation message", () => {
    const message = createWhatsAppBookingMessage({
      intent: "Day visit",
      date: "2026-08-22",
      ticketType: "Weekend / holiday ticket",
      groupSize: "3–4 people",
      name: "Aarav Sharma",
      phone: "7666779997",
    });

    expect(message).toContain("Interest: Day visit");
    expect(message).toContain("Date: 2026-08-22");
    expect(message).toContain("Name: Aarav Sharma");
  });
});
