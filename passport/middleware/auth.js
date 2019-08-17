const auth =  {
    // === check if user is logged in ===
    loggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            // console.log("User Authenticated");
            next();
        } else {
            // console.log("User Not Authenticated");
            res.redirect("/api/users/restricted");
        }
    },
    // === logout user ===
    logout: (req, res, next) => {
        if (req.isAuthenticated()) {
            // console.log("Logged Out");
            req.logout();
            next();
        } else {
            next();
        }
    }
};

module.exports = auth;