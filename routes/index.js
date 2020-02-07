const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");
const tagModel = require("../models/Tag");
const sneakerModel = require("../models/Sneaker");

router.get(["/", "/home"], (req, res) => {
  res.render("index");
});

router.get("/sneakers/collection", (req,res) => {
  sneakerModel
    .find()
    .then(sneakers => {
      tagModel.find().then(tags => {
        res.render("products", {
          sneakers: sneakers,
          tags: tags
        })

      })
    })
    .catch(dbErr => console.error(dbErr))
});

router.get("/sneakers/:cat", (req, res) => {
  sneakerModel
    .find({category: req.params.cat})
    .then(dbRes => {
      res.render("products", {
        sneakers: dbRes
      })
    })
    .catch(dbErr => console.error(dbErr))
});

router.get("/one-product/:id", (req, res) => {
  sneakerModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("one_product", {
        sneaker: dbRes
      })
    })
    .catch(dbErr => console.error(dbErr))
});




module.exports = router;
