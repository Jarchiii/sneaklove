const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    label : {
        type: [String],
        enum: ["Street", "Classic", "Casual", "Running", "Fancy"],
        required: true
    }
});

const tagModel = mongoose.model("Tag", tagSchema);

module.exports = tagModel;
