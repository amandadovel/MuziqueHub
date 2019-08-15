// const router = require("express").Router();
// const fs = require("fs");
// const multiparty = require("multiparty");
// const AWS = require("aws-sdk");
// require ("dotenv").config();

// // Create S3 instance
// const s3 = new AWS.S3();


// // Abstract function to upload a file returning a promise
// const uploadFile = (buffer, name, type) => {
//     const params = {
//         ACL: 'public-read',
//         Body: buffer,
//         Bucket: process.env.S3_BUCKET,
//         ContentType: type.mine,
//         Key: `${name}.${type.ext}`
//     };
//     return s3.upload(params).promise();
// };

// // Define POST route
// router.post("/upload", (req, res) => {
//     console.log('in route');
//     const form = new multiparty.Form();
//         form.parse(req, async (err, fields, files) => {
//             if (err) throw new Error(err);
//             try {
//                 const path = files.file[0].path;
//                 const buffer = fs.readFileSync(path);
//                 const type = fileType(buffer);
//                 const timestamp = Date.now().toString();
//                 const fileName = `bucketFolder/${timestamp}-lg`;
//                 const data = await uploadFile(buffer, fileName, type);
//                 console.log('data', data);
//                 return res.status(200).send(data);
//             } catch (err) {
//                 return res.status(400).send(err);
//             }
//         });
// });

// router.get('/test', (req, res) => {
//     console.log('in route');
//     res.send('test');
// });

// exports.module = router;

const router = require("express").Router();
const fs = require("fs");
const multiparty = require("multiparty");
const AWS = require("aws-sdk");
require ("dotenv").config();

// // Create S3 instance
const s3 = new AWS.S3();


// // Abstract function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
    console.log('buffer', buffer)
    const params = {
        ACL: 'public-read',
        Body: buffer,
        Bucket: process.env.S3_BUCKET,
        ContentType: type.mine,
        Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
};

const test = () => {
    console.log('test')
}

// Define POST route
router.post("/upload", (req, res) => {
    console.log('in route');
    const form = new multiparty.Form();
        form.parse(req, async (err, fields, files) => {
            if (err) throw new Error(err);
            try {
                console.log('testing')
                const path = files.file[0].path;
                const buffer = fs.readFileSync(path);
                // const type = fileType(buffer);
                console.log('testing 2')
                const timestamp = Date.now().toString();
                const fileName = `bucketFolder/${timestamp}-lg`;
                // const data = await uploadFile(buffer, fileName, type);
                console.log('data');
                // test();
                await uploadFile(buffer, fileName);
                console.log('last test')
                return res.status(200).send(data);
            } catch (err) {
                return res.status(400).send(err);
            }
        });
});


module.exports = router;