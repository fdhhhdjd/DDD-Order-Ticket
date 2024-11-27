const { Pool } = require("pg");

const {
  MAX_CONNECTIONS,
  IDLE_TIMEOUT_MILLS,
  CONNECTION_TIMEOUT_MILLS,
} = require("../../shared/constants");

const {
  pgConfig: { DatabaseName, Host, Password, Port, User, SSL },
} = require("../../shared/configs/db.config");

class Database {
  constructor() {
    this.pool = new Pool({
      host: Host, // Host
      port: Port, // Port
      user: User, // Database username
      password: Password, // Database password
      database: DatabaseName, // Database name
      // SSL configuration for secure connection
      ssl: SSL,
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
