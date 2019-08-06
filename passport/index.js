const passport = require("passport");

// Import stategies
const LoginStrategy = require("./LoginStrategy");
const SignupStrategy = require("./SignupStrategy");

// Config strategies
passport.use("local-login", LoginStrategy);
passport.use("local-signup", SignupStrategy);

module.exports = passport;