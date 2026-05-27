import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export const PRICING_PLANS = [
  { id: "free", name: "Free", price: 0, clipsPerMonth: 5, watermark: true },
  { id: "pro", name: "Pro", price: 19, clipsPerMonth: Infinity, watermark: false },
  { id: "creator", name: "Creator", price: 49, clipsPerMonth: Infinity, priority: true },
  { id: "team", name: "Team", price: 99, clipsPerMonth: Infinity, teamAccess: true },
];
