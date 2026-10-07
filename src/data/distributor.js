export const distributor = {
  name: "Rina Kusumawati",
  company: "PT Glowvit Nusantara",
  brand: "Glowvit",
  level: "Silver Leader",
  tagline: "Kulit Cerah, Hidup Berkah",
  waNumber: "628123456789",
};

export function waLink(message) {
  return `https://wa.me/${distributor.waNumber}?text=${encodeURIComponent(message)}`;
}
