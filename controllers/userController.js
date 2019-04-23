const User = require("../models/model");
const status = require("http-status");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../validation/signUp");
const validateLoginInput = require("../validation/signIn");

exports.getUser = async ctx => {
  const tasks = await User.find({});
  if (!tasks) {
    throw new Error("There was an error retrieving your tasks.");
  } else {
    ctx.body = tasks;
  }
};

exports.addUser = async ctx => {
  const { errors, isValid } = validateRegisterInput(ctx.request.body);
  if (!isValid) {
    ctx.status = 400;
    ctx.body = errors;
  }
  const { name, email, password } = ctx.request.body;
  const user = await User.findOne({
    email
  });
  if (user) {
    ctx.status = 401;
    ctx.body = errors;
  } else {
    const avatar = gravatar.url(ctx.request.body.email, {
      s: "200",
      r: "pg",
      d: "mm"
    });
    ctx.status = 200;
    User.create({
      name,
      email,
      password,
      avatar
    });
    ctx.body = { message: "Task created!" };
  }
};

exports.checkUser = async ctx => {
  const { errors, isValid } = validateLoginInput(ctx.request.body);
  if (!isValid) {
    ctx.status = 400;
    ctx.body = errors;
  }

  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = errors;
  }

  const user = await User.findOne({ email });

  if (user && user.comparePasswords(password)) {
    ctx.status = 200;
    const payload = {
      id: user.id,
      name: user.name,
      avatar: user.avatar
    };

    ctx.response.body = jwt.sign(payload, "secret");
  } else {
    ctx.status = 401;
    ctx.body = errors;
  }
};

exports.getMe = () => {
  passport.authenticate("jwt", { session: false }),
    ctx => {
      return ctx.json({
        id: ctx.body.user.id,
        name: ctx.body.user.name,
        email: ctx.body.user.email
      });
    };
};

exports.restorePassword = async ctx => {
  const { email, password } = ctx.request.body;

  if (!email) {
    ctx.throw(status.BAD_REQUEST, { message: "Invalid data" });
  }

  const user = await User.findOne({ email: email });

  if (user) {
    const result = await User.updateOne(
      { email: email },
      { $set: { password: password } }
    );
    ctx.body = { message: "User modified", data: result };
  }
};
