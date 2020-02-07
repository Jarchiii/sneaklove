const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag")
const protectRoute = require("./../middlewares/protectRoute");

router.get("/dashboard_sneaker", protectRoute, (req, res) => {
    sneakerModel
      .find()
      .then(dbRes => {
        res.render("products_manage", {
          sneakers: dbRes
        }) 
      })
      .catch(dbErr => console.log(dbErr));
  });

  router.get("/product-edit/:id", protectRoute, (req, res) => {
    sneakerModel
        .findById(req.params.id)
        .then(sneaker => {
          tagModel.find().then(tag => {
            res.render("product_edit", {
              sneaker: sneaker,
              tags: tag
          })
        })
 
        })
        .catch(dbErr => console.error(dbErr));
  });

  router.post("/product-edit/:id", protectRoute, (req, res) => {
    const {name, text, size, description, price, category, tags} = req.body;

    sneakerModel
    .findByIdAndUpdate(req.params.id, {
      name,
      text,
      size,
      description,
      price,
      category,
      tags
    })
    .then(res.redirect("/dashboard_sneaker"))
    .catch(dbErr => console.error(dbErr));
  });

  router.get("/delete/:id", protectRoute, (req, res) => {
      sneakerModel
        .findByIdAndDelete(req.params.id)
        .then(res.redirect("/dashboard_sneaker"))
        .catch(dbErr => console.error(dbErr));
  })

  router.get("/prod-add", protectRoute, (req, res) => {
   tagModel
    .find()
    .then(tag => {
      res.render("products_add", {
        tags: tag
    })
  })
  })


  
  router.post("/prod-add", (req, res) => {
    const sizes = {
      men : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
      women: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
      kids: ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"]
    }
    const newSneaker = req.body;
    console.log(newSneaker)
    newSneaker.sizes = sizes[newSneaker.category]
    sneakerModel
      .create(newSneaker)
      .then(dbResult => {
        console.log(newSneaker)
        res.redirect("/dashboard_sneaker")
      })
      .catch(dbErr => console.error(dbErr));
  });


  router.get("/create-tag", (req, res) => {
    res.render("products_add")
  })

  router.post("/create-tag", (req, res) => {
    const newTag = req.body;
    console.log(req.body)
    tagModel
    .create(newTag)
    .then(res.redirect("/prod-add"))
    .catch(dbErr => console.error(dbErr));
  })

module.exports = router;
