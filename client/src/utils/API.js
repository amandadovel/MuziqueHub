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
    getArtistInfo: (getArtistInfo) => {
        console.log("Eventful data:", getArtistInfo);
        return axios.get("/api/concerts", getArtistInfo);
        
    }
};