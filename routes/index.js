const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");
const tagModel = require("../models/Tag");
const sneakerModel = require("../models/Sneaker");

router.get("/", (req, res) => {
  res.render("index");
});

// router.get("/sneakers/:cat", (req, res) => {
//   res.render("index");
// });

// router.get("/one-product/:id", (req, res) => {
//   res.send("index");
// });

router.get("/sneakers/collection", (req,res) => {
  res.render("products")
})


router.get("/sneakers/kids", (req,res) => {
  res.render("menu/kids")
})

router.get("/sneakers/women", (req,res) => {
  res.render("menu/women")
})

router.get("/sneakers/men", (req,res) => {
  res.render("menu/men")
})

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


module.exports = router;
