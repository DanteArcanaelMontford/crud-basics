const CostumersModel = require("../models/costumers");
const { encrypt } = require("../utils/password");

async function add(req, res) {
  const { name, age, email, password } = req.body;

  const encryptedPassword = await encrypt(password);

  const register = new CostumersModel({
    name,
    age,
    email,
    password: encryptedPassword,
  });

  register.save();

  res.send("Register successful");
}

module.exports = {
  add,
};
