const express = require("express");
const router = express.Router();
const Url = require("../model/UrlShorten");

router.post("/new", (req, res, next) => {
  let originalUrl = req.body.url;
  Url.findOne({ originalUrl }, (err, url) => {
    if (err) return next(err);
    if (url) {
      return res
        .status(200)
        .json({ status: "success", message: "already shorted Url", url });
    }
    Url.create({ originalUrl }, (err, url) => {
      if (err) return next(err);
      res.status(201).json({ status: "success", message: "url shorter", url });
    });
  });
});

module.exports = router;
