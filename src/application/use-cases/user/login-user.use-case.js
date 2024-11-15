const AuthService = require("../../../domain/services/auth.service");
const PostgresUserRepository = require("../../../infrastructure/repositories/user.repository");

class LoginUseCase {
  constructor() {
    this.authService = new AuthService(new PostgresUserRepository());
  }

  async execute(username, password) {
    return await this.authService.login(username, password);
  }
}

module.exports = new LoginUseCase();
