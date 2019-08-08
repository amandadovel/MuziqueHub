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
    getArtistInfo: (artistInfo) => {
        console.log("ARTIST", artistInfo);
        return axios.get("/api/artist");
        
    }
};