const { Pool } = require("pg");
const {
  SSL_REJECT_UNAUTHORIZED,
  MAX_CONNECTIONS,
  IDLE_TIMEOUT_MILLS,
  CONNECTION_TIMEOUT_MILLS,
} = require("../../share/constants");

class Database {
  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST, // Host
      port: process.env.DB_PORT, // Port
      user: process.env.DB_USER, // Database username
      password: process.env.DB_PASSWORD, // Database password
      database: process.env.DB_NAME, // Database name
      ssl: {
        // SSL configuration for secure connection
        rejectUnauthorized: SSL_REJECT_UNAUTHORIZED, // Accept all SSL certificates (for cloud services like CockroachDB)
      },
      max: MAX_CONNECTIONS, // Maximum number of connections
      idleTimeoutMillis: IDLE_TIMEOUT_MILLS, // Close idle clients after 30 seconds
      connectionTimeoutMillis: CONNECTION_TIMEOUT_MILLS, // Return an error after 2 seconds if connection could not be established
    });
  }

  // This is method use to connect try to connect to the database
  async connect() {
    try {
      const client = await this.pool.connect(); // Get a client from the pool
      console.log("Connected to PostgreSQL database");
      client.release(); // Release the client after the operation
    } catch (error) {
      console.error("Error connecting to the database", error);
    }
  }
}

module.exports = new Database();
