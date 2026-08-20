import React, { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, Check, Loader2, MessageCircle, UsersRound, X } from "lucide-react";
import { createWhatsAppBookingMessage, isValidIndianPhone } from "@/lib/booking";

type BookingModalProps = {
  isOpen: boolean;
  intent: string;
  onClose: () => void;
};

type BookingForm = {
  date: string;
  ticketType: string;
  groupSize: string;
  name: string;
  phone: string;
};

const initialForm: BookingForm = {
  date: "",
  ticketType: "Weekday ticket",
  groupSize: "3–4 people",
  name: "",
  phone: "",
};

export function BookingModal({ isOpen, intent, onClose }: BookingModalProps) {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isEventIntent = /event|wedding|lawn|hall/i.test(intent);

  useEffect(() => {
    if (!isOpen) return;
    setForm(current => ({ ...current, ticketType: isEventIntent ? "Wedding celebration" : current.ticketType }));
    setIsSubmitting(false);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [intent, isOpen, onClose]);

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  if (!isOpen) return null;

  const update = (field: keyof BookingForm, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof BookingForm, string>> = {};
    if (!form.date) nextErrors.date = "Choose your preferred date.";
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!isValidIndianPhone(form.phone)) nextErrors.phone = "Enter a valid 10-digit phone number.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const message = createWhatsAppBookingMessage({ ...form, intent });
    setIsSubmitting(true);
    window.open(`https://wa.me/917666779997?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    window.setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 220);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        aria-describedby="booking-description"
        onMouseDown={event => event.stopPropagation()}
      >
        <button ref={closeButtonRef} className="icon-button modal-close" type="button" onClick={onClose} aria-label="Close booking form">
          <X size={20} />
        </button>
        <div className="booking-modal__intro">
          <span className="eyebrow eyebrow--teal">Plan your day</span>
          <h2 id="booking-title">Let’s make it a memorable one.</h2>
          <p id="booking-description">Share a few details and continue your {intent.toLowerCase()} enquiry on WhatsApp.</p>
          <div className="booking-modal__promise">
            <Check size={16} />
            <span>Confirmation continues directly with the AapnoGhar team.</span>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span><CalendarDays size={15} /> Preferred date</span>
            <input type="date" min={minDate} value={form.date} onChange={event => update("date", event.target.value)} />
            {errors.date && <small className="field-error">{errors.date}</small>}
          </label>
          <div className="booking-form__row">
            <label className="field">
              <span>{isEventIntent ? "Event type" : "Ticket type"}</span>
              <select value={form.ticketType} onChange={event => update("ticketType", event.target.value)}>
                {isEventIntent ? <>
                  <option>Wedding celebration</option>
                  <option>Corporate event</option>
                  <option>Family celebration</option>
                  <option>Conference / meeting</option>
                </> : <>
                  <option>Weekday ticket</option>
                  <option>Weekend / holiday ticket</option>
                  <option>Stay enquiry</option>
                  <option>Corporate / group enquiry</option>
                </>}
              </select>
            </label>
            <label className="field">
              <span><UsersRound size={15} /> Group size</span>
              <select value={form.groupSize} onChange={event => update("groupSize", event.target.value)}>
                <option>1–2 people</option>
                <option>3–4 people</option>
                <option>5–10 people</option>
                <option>11–25 people</option>
                <option>25+ people</option>
              </select>
            </label>
          </div>
          <label className="field">
            <span>Your name</span>
            <input type="text" autoComplete="name" value={form.name} onChange={event => update("name", event.target.value)} placeholder="Enter your name" />
            {errors.name && <small className="field-error">{errors.name}</small>}
          </label>
          <label className="field">
            <span>Mobile number</span>
            <input type="tel" inputMode="numeric" autoComplete="tel" value={form.phone} onChange={event => update("phone", event.target.value)} placeholder="10-digit mobile number" />
            {errors.phone && <small className="field-error">{errors.phone}</small>}
          </label>
          <button className="button button--coral button--wide" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="button-spinner" size={18} /> : <MessageCircle size={18} />} {isSubmitting ? "Opening WhatsApp…" : "Continue on WhatsApp"}
          </button>
        </form>
      </section>
    </div>
  );
}
