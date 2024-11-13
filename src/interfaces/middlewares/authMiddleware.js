const jwt = require("jsonwebtoken");

class AuthMiddleware {
  static authenticate(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  }
}

module.exports = AuthMiddleware;
