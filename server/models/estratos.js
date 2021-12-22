const mongoose = require("mongoose");

const estratosSchema = mongoose.Schema({
    1: Number,
    2: Number,
    3: Number,
    4: Number,
    5: Number,
    6: Number,
});

module.exports = mongoose.model("Estratos", estratosSchema);
