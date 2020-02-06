const TagModel = require("./../models/Tag");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sneakerLover", {useNewUrlParser: true});

const tags = [
    {
        label : "Street"
    },
    {
        label : "Casual"
    },
    {
        label : "Classic"
    },
    {
        label : "Fancy"
    },
    {
        label: "Running"
    }
]

function insertTag() {
    TagModel.insertMany(tags)
      .then(dbRes => console.log(dbRes))
      .catch(dbErr => console.log(dbErr));
  }

  insertTag();