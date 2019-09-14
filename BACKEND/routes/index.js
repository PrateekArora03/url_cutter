const express = require("express");
const router = express.Router();
const Url = require('../model/UrlShorten');

router.post('/new',(req,res,next)=>{
    Url.create(req.body,(err,url)=>{
        res.status(201).
    })
})

module.exports= router;