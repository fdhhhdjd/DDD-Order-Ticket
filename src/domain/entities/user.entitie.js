class User {
  constructor(id, name, email, username, passwordHash) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.passwordHash = passwordHash;
  }
}

module.exports = User;
