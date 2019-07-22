const express = require('express');
const cors = require('cors');
const multer  = require ('multer');
const app = express();
const port = 3344;

app.use(cors({
    origin:'https://vueuploader.herokuapp.com/'
}))



const fileFilter = function (req,file,cb,next){
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if(!allowedTypes.includes(file.mimetype)){
        const error = new Error("Wrong File Type");
        error.code = "LIMIT_FILE_TYPES";
        return cb(error, false);
    }
    cb(null, true);
}

const MAX_SIZE = 20000;
const upload = multer ({
    dest: './uploads/',
    fileFilter,
    limits: {
        fileSize: MAX_SIZE
    }
})

const pureUpload = multer({
    dest: './uploads/'
});

app.post('/upload', upload.single("file"), (req,res)=>{
    res.json({ file : req.file}); 
})

app.post('/multiple', upload.array("files"), (req,res)=>{
    res.json({ files : req.files}); 
})

app.post('/dropzone', pureUpload.single("file"), (req,res)=>{
    res.json({ file : req.file}); 
})

app.get('/', (req,res)=>{
    res.status(200).json({success: 'Yeah successfull created'})
})

app.use(function (err, req, res) {
    if(err.code === "LIMIT_FILE_TYPES"){
        res.status(422).json({ error: "Only images are allowed"});
        return;
    }

    if(err.code === "LIMIT_FILE_SIZE"){
        res.status(422).json({ error: `Too Large. Max size is ${MAX_SIZE/1000}Kb`});
        return;
    }
})



app.listen(port, ()=>  console.log('Running on localhost:'+port) );