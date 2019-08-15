// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const passport = require("./passport");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const AWS = require("aws-sdk");
const bluebird = require("bluebird");
require ("dotenv").config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport
app.use(flash());
app.use(session({ 
    secret: "szwpibrdrl",
    resave: true, 
    saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

// Static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}
// Routes
app.use(routes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3db", { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Configure keys for accessing AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);


// Start server
app.listen(PORT, () => console.log(`🌎 ==> API server now listening on port ${PORT}!`));