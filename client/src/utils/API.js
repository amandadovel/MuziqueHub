import axios from "axios";

export default {
    // Search database for user
    getUser: function() {
        return axios.get("/api/user/login");
    },
    // Create user in database
    createUser: function(user) {
        return axios.post("/api/user/signup", user);
    },
};