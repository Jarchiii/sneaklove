const TagModel = require("./../models/Tag");
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/sneakerLover", {useNewUrlParser: true});

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
var TagsId = []
function insertTag() {
   return TagModel.insertMany(tags)
     
  }










  