const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../entities/user.entities");
const UserDTO = require("../dtos/user.dto");

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(name, email, username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const userEntities = new User({
      name,
      email,
      username,
      password_hash: passwordHash,
    });
    const user = await this.userRepository.createUser(userEntities);

    return UserDTO.fromDomain(user, {
      includeUsername: true,
      includeToken: false,
    });
  }

  async login(username, password) {
    const user = await this.userRepository.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return UserDTO.fromDomain(Object.assign({}, user, { token }), {
      includeUsername: false,
      includeToken: true,
    });
  }
}

module.exports = AuthService;
