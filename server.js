require("dotenv").config();
// Dependencies
const express = require("express");
const fileUpload = require("express-fileupload");
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
app.use(fileUpload);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

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



// Start server
app.listen(PORT, () => console.log(`🌎 ==> API server now listening on port ${PORT}!`));