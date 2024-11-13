const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../entities/user.entities");

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(name, email, username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      username,
      password_hash: passwordHash,
    });
    return await this.userRepository.createUser(user);
  }

  async login(username, password) {
    const user = await this.userRepository.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, user };
  }
}

module.exports = AuthService;
