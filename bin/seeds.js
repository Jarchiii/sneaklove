const SneakerModel = require("./../models/Sneaker");
const mongoose = require("mongoose");
​
mongoose.connect("mongodb://localhost/sneakerLover", {useNewUrlParser: true});
​
​
const sneakers = [
​
   { 
    name : "Running Homme",
    ref : "1-1",
    sizes : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
    description : "Des pompes homme pour courrir",
    price : 1000,
    category: "men", 
    image : "medias/img/sneakersHomme/1-1.png",
    id_tags: "5e3c2f70dfb52d54c3d83e5a",
   },
//    { 
//     name : "Fancy Homme",
//     ref : "1-2",
//     sizes : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
//     description : "Des pompes homme pour être fancy!",
//     price : 1500,
//     category: "men", 
//     image : "medias/img/sneakersHomme/1-2.png",
//     id_tags: "5e3c27bcaceae653db193844"
//    },
//    { 
//     name :  "Classic Homme",
//     ref : "1-3",
//     sizes : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
//     description : "Des pompes classiques pour homme ",
//     price : 500,
//     category: "men", 
//     image : "medias/img/sneakersHomme/1-3.png",
//     id_tags: "5e3c27bcaceae653db19384"
//    },
//    { 
//     name : " Street Homme",
//     ref : "1-4",
//     sizes : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
//     description : "Des pompes street! t'as vu?",
//     price : 750,
//     category: "men", 
//     image : "medias/img/sneakersHomme/1-4.png",
//     id_tags: "5e3c27bcaceae653db193841"
//    },
//    { 
//     name : "Casual Homme",
//     ref : "1-5",
//     sizes : ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
//     description : "Des pompes casu pour sortir les poubelles",
//     price : 2,
//     category: "men",
//     image : "medias/img/sneakersHomme/1-5.png",
//     id_tags: "5e3c27bcaceae653db193842"
//    },
//    { 
//    name : "Running Femme",
//    ref : "0-1",
//     sizes :  ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'] ,
//     description : "Des pompes femme pour courrir",
//     price : 1000,
//     category: "women", 
//     image : "medias/img/sneakersFemme/0-1.png",
//     id_tags: "5e3c27bcaceae653db193845",
//    },
//    { 
//     name : "Fancy Femme",
//     ref : "0-2",
//     sizes : ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'],
//     description : "Des pompes femme pour être fancy!",
//     price : 1500,
//     category: "women", 
//     image : "medias/img/sneakersFemme/0-2.png",
//     id_tags: "5e3c27bcaceae653db193844"
//    },
//    {
//     name :  "Classic Femme",
//     ref : "0-3",
//     sizes : ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'],
//     description : "Des pompes classiques pour Femme",
//     price : 500,
//     category: "women", 
//     image : "medias/img/sneakersFemme/0-3.png",
//     id_tags: "5e3c27bcaceae653db19384"
//    },
//    { 
//     name : " Street Femme",
//     ref : "0-4",
//     sizes : ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'],
//     description : "Des pompes street! t'as vu?",
//     price : 750,
//     category: "women", 
//     image : "medias/img/sneakersFemme/0-4.png",
//     id_tags: "5e3c27bcaceae653db193841"
//    },
//    { 
//     name : "Casual Femme",
//     ref : "0-5",
//     sizes : ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'],
//     description : "Des pompes casu pour sortir les poubelles",
//     price : 2,
//     category: "women",
//     image : "medias/img/sneakersFemme/0-5.png",
//     id_tags: "5e3c27bcaceae653db193842"
//    },
//    { 
//     name : "Running Kids",
//     ref : "00-1",
//     sizes : ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
//     description : "Des pompes kids pour courrir",
//     price : 1000,
//     category: "kids", 
//     image : "medias/img/sneakersKids/00-1.png",
//     id_tags: "5e3c27bcaceae653db193845",
//    },
//    { 
//     name : "Fancy Kids",
//     ref : "00-2",
//     sizes : ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
//     description : "Des pompes kids pour être fancy!",
//     price : 1500,
//     category: "kids", 
//     image : "medias/img/sneakersKids/00-2.png",
//     id_tags: "5e3c27bcaceae653db193844"
//    },
//    {
//     name :  "Classic kids",
//     ref : "00-3",
//     sizes : ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
//     description : "Des pompes classiques pour kids",
//     price : 500,
//     category: "kids", 
//     image : "medias/img/sneakersFemme/00-3.png",
//     id_tags: "5e3c27bcaceae653db19384"
//     },
//     { 
//     name : " Street kids",
//     ref : "00-4",
//     sizes : ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
//     description : "Des pompes street! t'as vu?",
//     price : 750,
//     category: "kids", 
//     image : "medias/img/sneakersKids/00-4.png",
//     id_tags: "5e3c27bcaceae653db193841"
//     },
//     { 
//     name : "Casual kids",
//     ref : "00-5",
//     sizes : ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
//     description : "Des pompes casu pour sortir les poubelles",
//     price : 2,
//     category: "kids",
//     image : "medias/img/sneakersKids/00-5.png",
//     id_tags: "5e3c27bcaceae653db193842"
//     }
​
​
​
​
​
​
​
]
​
function insertSneaker() {
    SneakerModel.insertMany(sneakers)
      .then(dbRes => console.log(dbRes))
      .catch(dbErr => console.log(dbErr));
  }
​
  insertSneaker();






