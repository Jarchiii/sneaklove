const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const userModel = require("../models/User");
const sneakerModel = require("../models/Sneaker");

router.get("/dashboard_sneaker", (req, res) => {
    sneakerModel
      .find()
      .then(dbRes => {
        res.render("products_manage", {
          sneakers: dbRes
        }) 
      })
      .catch(dbErr => console.log(dbErr));
  });

  router.get("/product-edit/:id", (req, res) => {
    sneakerModel
        .findById(req.params.id)
        .then(dbRes => {
            res.render("product_edit", {
                sneaker: dbRes
            })
        })
        .catch(dbErr => console.error(dbErr));
       
  });

  router.post("/product-edit/:id", (req, res) => {
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

  router.get("/delete/:id", (req, res) => {
      sneakerModel
        .findByIdAndDelete(req.params.id)
        .then(res.redirect("/dashboard_sneaker"))
        .catch(dbErr => console.error(dbErr));
  })

  router.get("/prod-add", (req, res) => {
    res.render("products_add")
  })

  router.post("/prod-add", (req, res) => {
    const newSneaker = req.body;
    sneakerModel
      .create(newSneaker)
      .then(res.redirect("/dashboard_sneaker"))
      .catch(dbErr => console.error(dbErr));
  });

module.exports = router;
