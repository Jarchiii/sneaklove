const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sneakerSchema = new Schema({
  name: 
  { 
      type :String,
      required: true
  },
  ref: 
  {
      type : String,
      required : true,
  },
  sizes: 
  {
    type: Number,
    enum: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    default: 40,
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
   id_tag : 
   {
     type : Schema.Types.ObjectId,
     ref : "Tag"
   }
   
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;