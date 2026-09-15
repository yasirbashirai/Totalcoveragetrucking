/** Lightweight event helpers. Push to dataLayer when GTM is present; no-op otherwise. */
type DL = { push: (e: Record<string, unknown>) => void };
const dl = () => (typeof window !== "undefined" ? ((window as unknown as { dataLayer?: DL }).dataLayer ?? null) : null);
export const track = (event: string, data: Record<string, unknown> = {}) => dl()?.push({ event, ...data });
export const trackPhoneClick = (location: string) => track("phone_click", { location });
export const trackLead = (form: string, data: Record<string, unknown> = {}) => track("generate_lead", { form, ...data });
