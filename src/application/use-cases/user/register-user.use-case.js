const AuthService = require("../../../domain/services/auth.service");
const PostgresUserRepository = require("../../../infrastructure/repositories/user.repository");

class RegisterUseCase {
  constructor() {
    this.authService = new AuthService(new PostgresUserRepository());
  }

  async execute(name, email, username, password) {
    return await this.authService.register(name, email, username, password);
  }
}

module.exports = new RegisterUseCase();
