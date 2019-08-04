// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3db", { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});