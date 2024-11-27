const { SSL_REJECT_UNAUTHORIZED } = require("../constants");

const pgConfig = {
  Port: process.env.DB_PORT,
  User: process.env.DB_USER,
  Host: process.env.DB_HOST,
  Password: process.env.DB_PASSWORD,
  DatabaseName: process.env.DB_NAME,
  SSL: {
    rejectUnauthorized: SSL_REJECT_UNAUTHORIZED,
  },
};

module.exports = {
  pgConfig,
};
