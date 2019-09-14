const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/new", (req, res, next) => {
  User.create(req.body, (err, user) => {
      if(err) return next(err);
    res.status(201).json({ user });
  });
});

router.post('/login',())

module.exports = router;
