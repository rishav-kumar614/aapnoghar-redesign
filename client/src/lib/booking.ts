export function isValidIndianPhone(value: string) {
  return /^\d{10}$/.test(value.replace(/\D/g, ""));
}

export function createWhatsAppBookingMessage(details: {
  intent: string;
  date: string;
  ticketType: string;
  groupSize: string;
  name: string;
  phone: string;
}) {
  return [
    "Hello AapnoGhar team, I would like to make an enquiry.",
    `Interest: ${details.intent}`,
    `Date: ${details.date}`,
    `Ticket / enquiry type: ${details.ticketType}`,
    `Group size: ${details.groupSize}`,
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
  ].join("\n");
}
