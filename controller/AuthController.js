const User = require("../models/User");

const bcrypt = require('bcryptjs');

module.exports = class AuthController {
  static login(req, res) {
    res.render("auth/login");
  }

  static register(req, res) {
    res.render("auth/register");
  }

  static async registerSave(req, res) {
    const { name, email, password, cfPassword } = req.body;

    if (!name || !email || !password || !cfPassword) {
      req.flash("message", "Preencha todos os campos antes de continuar!");
      res.render("auth/register");

      return;
    }

    // Password match validation
    if (password != cfPassword) {
      req.flash("message", "As senhas não coincidem!");
      res.render("auth/register");

      return;
    }
  }
};
