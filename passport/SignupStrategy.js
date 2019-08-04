const Strategy = require("passport-local").Strategy;
const User = require("../models/User");

const SignupStrategy = new LocalStrategy((username, password, done => {

}));

module.exports = SignupStrategy;