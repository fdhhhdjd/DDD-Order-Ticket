const { envConfig } = require("../configs/env.config");
const { ENV } = require("../constants");

const getProd = () => envConfig.Env === ENV.PROD;

module.exports = {
  getProd,
};
