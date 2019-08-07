import axios from "axios";
require("dotenv").config();

export default {
    login: (loginInfo) => {
        return axios.get("/api/users/login", loginInfo);
    },
    signup: (signupInfo) => {
        console.log("Signup Info: ", signupInfo);
        return axios.post("/api/users/signup", signupInfo);
    },
    // TODO
    getConcerts: (artist) => {
        return axios.get("<songkick url with hidden API key>");
    }
};