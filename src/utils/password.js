const bcrypt = require("bcrypt");

async function encrypt(password) {
  const salt = await bcrypt.genSalt();
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
}

module.exports = {
  encrypt,
};
