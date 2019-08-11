module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("User Authenticated");
        next();
    } else {
        return res.redirect("/api/users/fail");
    }
};