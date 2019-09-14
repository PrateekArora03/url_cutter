const express = require("express");
const router = express.Router();
const Url = require("../model/UrlShorten");

router.get("/:shortId", (req, res, next) => {
  let shortUrl = req.params.shortId;
  Url.findOneAndUpdate(
    { shortUrl },
    { $inc: { viewCount: 1 } },
    { new: true },
    (err, url) => {
      if (err) return next(err);
      if (!url)
        return res
          .status(200)
          .json({ status: "success", message: "url not found" });
      // res.status(200).json({ url });
      res.redirect(url.originalUrl);
    }
  );
});

module.exports = router;
