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
    // Gets concert data from eventful API
    getConcerts: (music) => {
        console.log("Eventful data:", music);
        return axios.get("/api/concerts", music);
        
    }
};