module.exports = {
  // Database PG
  SSL_REJECT_UNAUTHORIZED: false,
  MAX_CONNECTIONS: 20,
  IDLE_TIMEOUT_MILLS: 30000,
  CONNECTION_TIMEOUT_MILLS: 2000,

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || "secret",

  // ENV
  ENV: {
    PROD: "prod",
    DEV: "dev",
  },
};
