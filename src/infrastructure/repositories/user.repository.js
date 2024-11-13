const db = require("../database/db");
const User = require("../../domain/entities/user.entities");
const UserRepository = require("../../domain/repositories/user.repository");

class PostgresUserRepository extends UserRepository {
  async findUserById(id) {
    const result = await db.pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return new User({
      id: row.id,
      name: row.name,
      email: row.email,
      username: row.username,
      password_hash: row.password_hash,
    });
  }

  async findByUsername(username) {
    const result = await db.pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return new User({
      id: row.id,
      name: row.name,
      email: row.email,
      username: row.username,
      password_hash: row.password_hash,
    });
  }

  async createUser(user) {
    const result = await db.pool.query(
      "INSERT INTO users (name, email, username, password_hash) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.name, user.email, user.username, user.password_hash]
    );
    const row = result.rows[0];

    return new User({
      id: row.id,
      name: row.name,
      email: row.email,
      username: row.username,
      password_hash: row.password_hash,
    });
  }
}

module.exports = PostgresUserRepository;
