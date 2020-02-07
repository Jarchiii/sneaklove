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
        .then(dbRes => {
            res.render("product_edit", {
                sneaker: dbRes
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
    res.render("products_add")
  })

  router.post("/prod-add", (req, res) => {
    const newSneaker = req.body;
    sneakerModel
      .create(newSneaker)
      .then(res.redirect("/dashboard_sneaker"))
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
