const { pool } = require("../database/config");
const UserRepository = require("../../domain/repositories/UserRepository");
const User = require("../../domain/entities/User");

class UserRepositoryImpl extends UserRepository {
  async findByUsername(username) {
    const query = "SELECT * FROM users WHERE username = $1";
    const { rows } = await pool.query(query, [username]);
    return rows.length ? new User(...rows[0]) : null;
  }

  async findById(userId) {
    const query = "SELECT * FROM users WHERE user_id = $1";
    const { rows } = await pool.query(query, [userId]);
    return rows.length ? new User(...rows[0]) : null;
  }

  async createUser(userData) {
    const query = `
      INSERT INTO users (username, email, password_hash)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const { rows } = await pool.query(query, [
      userData.username,
      userData.email,
      userData.passwordHash,
    ]);
    return new User(...rows[0]);
  }
}

module.exports = UserRepositoryImpl;
