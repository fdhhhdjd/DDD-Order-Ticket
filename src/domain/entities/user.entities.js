class User {
  constructor(userId, username, email, passwordHash) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
  }
}

module.exports = User;
