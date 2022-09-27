const withNx = require("@nrwl/next/plugins/with-nx");
const withPWA = require("next-pwa");

const nextConfig = {
  nx: {
    svgr: false,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"]
  },
  env: {
    NX_API_KEY: process.env.NX_API_KEY,
    NX_AUTH_DOMAIN: process.env.NX_AUTH_DOMAIN,
    NX_PROJECT_ID: process.env.NX_PROJECT_ID,
    NX_STORAGE_BUCKET: process.env.NX_STORAGE_BUCKET,
    NX_MESSAGING_SENDER_ID: process.env.NX_MESSAGING_SENDER_ID,
    NX_APP_ID: process.env.NX_APP_ID,
    NX_MEASUREMENT_ID: process.env.NX_MEASUREMENT_ID,
  },
  pwa: {
    // disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
    dest: "../../dist/apps/calcohol/public",
    swSrc: "service-worker.js",
    sw: "sw.js",
  }
};

module.exports = withNx(withPWA(nextConfig));
