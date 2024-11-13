class User {
  constructor({ id = null, name, username, email, password_hash }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password_hash = password_hash;
  }
}

module.exports = User;
