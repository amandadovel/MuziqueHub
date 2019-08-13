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
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
// Routes
app.use(routes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3db", { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Start server
app.listen(PORT, () => console.log(`🌎 ==> API server now listening on port ${PORT}!`));