const User = require("../models/User");

const bcrypt = require("bcryptjs");

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

    // Check if user exist
    const checkIfUserExist = await User.findOne({ where: { email: email } });

    if (checkIfUserExist) {
      req.flash("message", "Este e-mail já está em uso!");
      res.render("auth/register");

      return;
    }

    // Create a password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      name,
      email,
      password: hashedPassword,
    };

    try {
      const createdUser  = await User.create(user);

      // Initialize session
      req.session.userid = createdUser.id;

      req.flash("message", "Cadastro realizado com sucesso!");

      req.session.save(() => {
        res.redirect("/");
      });
    } catch (error) {
      console.log(error);
    }
  }
};
