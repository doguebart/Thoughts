const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static login(req, res) {
    res.render("auth/login");
  }

  static async loginSave(req, res) {
    const { email, password } = req.body;

    // Check if user exist
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      req.flash("message", "Usuário não encontrado!");
      res.render("auth/login");

      return;
    }

    // Check if password match
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      req.flash("message", "Senha inválida");
      res.render("auth/login");

      return;
    }

    // Initialize session
    req.session.userid = user.id;

    req.flash("message", "Login realizado com sucesso!");

    req.session.save(() => {
      res.redirect("/");
    });
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
      const createdUser = await User.create(user);

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

  static logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
};
