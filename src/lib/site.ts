export const SITE = {
  name: "SVR Solutions",
  tagline: "Your Trusted Partner for Security & Technology Solutions",
  phone: "+91 89197 54496",
  phoneTel: "+918919754496",
  whatsapp: "918919754496",
  email: "info@svrsolutions.in",
  address: "18-6-523, Maqdoompura O/s Laldarwaza, Hyderabad - 500053, India",
  mapsQuery: "18-6-523, Maqdoompura O/s Laldarwaza, Hyderabad - 500053, India",
} as const;

export const whatsappLink = (msg = "Hi SVR Solutions, I'd like to enquire about your services.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
