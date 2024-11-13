const registerUseCase = require("../../application/use-cases/register-user.use-case");
const loginUseCase = require("../../application/use-cases/login-user.use-case");

class AuthController {
  async register(req, res) {
    try {
      const { name, email, username, password } = req.body;
      const user = await registerUseCase.execute(
        name,
        email,
        username,
        password
      );
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await loginUseCase.execute(username, password);
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
