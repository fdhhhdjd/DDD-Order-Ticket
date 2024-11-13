class UserDTO {
  constructor(data) {
    Object.keys(data).forEach((key) => {
      if (data[key] !== null) {
        this[key] = data[key];
      }
    });
  }

  static fromDomain(user, options = {}) {
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      username: options.includeUsername ? user.username : null,
      token: options.includeToken ? user.token : null,
    };

    return new UserDTO(data);
  }
}

module.exports = UserDTO;
