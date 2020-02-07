const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sneakerSchema = new Schema({
  name: 
  { 
      type :String,
      required: true,
      unique : true,
  },
  ref: 
  {
      type : String,
      required : true,
      unique : true

  },
  sizes: 
  {
    type: Object,
    // change this to an array of all values
    enum: [["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"], ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"], ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"]],
    default: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
    required: true
  },
  description : String,
  price:
   {
     type : Number,
     required : true,
  } ,
  category: 
  {
      type: String,
      enum: ["men", "women", "kids"],
      default :"men",
      required : true,

  },
  image : String,
  id_tags : 
   {
     type : [Schema.Types.ObjectId],
     ref : "Tag"
   }
   
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;