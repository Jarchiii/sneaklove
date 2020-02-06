const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt"); // intro to bcrypt hashing algorithm https://www.youtube.com/watch?v=O6cmuiTBZVs

router.get("/signup", (req, res) => {
    res.render("signup");

});


router.post("/signup", (req, res) => {
    const user = req.body
    if (!user.email || !user.password) {

        res.redirect("signup")
        console.log("VOus n'avez pas tout remplis !");
        return;
      } else {
        userModel
          .findOne({ email: user.email})
          .then(dbRes => {
            if (dbRes) {
              console.log("user email already exist")
              return res.redirect("signup"); 
            }
    
            const salt = bcrypt.genSaltSync(10); 
            const hashed = bcrypt.hashSync(user.password, salt); 
            user.password = hashed; 
            userModel.create(user).then(() => res.redirect("signin"));
            console.log("nouvel user enregistré");
          })
          .catch(dbErr => console.log(dbErr));
      }
})
  
router.get("/signin", (req, res) => {
    res.render("signin");
  });

  router.post("/signin", (req, res, next) => {
    const user = req.body;

    if (!user.email || !user.password) {
      console.log("one field is missingcl")
      return res.redirect("signin");
    }
  
    userModel
      .findOne({ email: user.email})
      .then(dbRes => {
        if (!dbRes) {
          // no user found with this email
          console.log("no user found with this email")
          return res.redirect("signin");
        }
        // user has been found in DB !
        if (bcrypt.compareSync(user.password, dbRes.password)) {
          // encryption says : password match success
          const { _doc: clone } = { ...dbRes }; // make a clone of db user
  
          delete clone.password; // remove password from clone
          // console.log(clone);
          req.session.currentUser = clone; // user is now in session... until session.destroy
          console.log("vous êtes connecté YiPEEEEE!")
          return res.redirect("/");
        } else {
          // encrypted password match failed
          console.log("Erreur de mot de passe")
          return res.redirect("signin");
        }
      })
      .catch(next);
  });
 

  router.get("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/signin");
    });
  });

 


  module.exports = router;
