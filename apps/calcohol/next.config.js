//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
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
  }
};

module.exports = withNx(nextConfig);
