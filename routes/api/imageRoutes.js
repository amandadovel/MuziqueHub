require("dotenv").config();
const router = require("express").Router();
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
})

router.post("/api/image/routes", (req, res) => {
    console.log(req);
})

module.exports = router;