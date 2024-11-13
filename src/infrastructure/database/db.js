const { Pool } = require("pg");

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
        rejectUnauthorized: false, // Accept all SSL certificates (for cloud services like CockroachDB)
      },
      max: 20, // Maximum number of connections
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
    });
  }

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
