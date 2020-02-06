const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");

router.get("/signup", (req, res) => {
    // const user = req.body
    res.render("signup");

  });

  
  router.get("/signin", (req, res) => {
    // const user = req.body

    // if (!user.email || !user.password) {
    //     res.redirect("")
    // }
    res.render("signin");
  });

  router.get("/dashboard_sneaker", (req, res) => {
      res.render("products_manage");
  })


  module.exports = router;