const API =
  process.env.NODE_ENV === "production"
    ? "https://xxx.vercel.app/api"
    : "http://localhost:3000/api";

module.exports = {
  DB_URI: process.env.DB_URI,
  API,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINRAY_API_SECRET: process.env.CLOUDINRAY_API_SECRET,
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  // STRIPE_TAX_RATE,
  // DOMAIN,
  // STRIPE_SHIPPING_RATE,
  // STRIPE_WEBHOOK_SECRET,
};
