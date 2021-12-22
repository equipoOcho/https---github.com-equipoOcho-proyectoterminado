const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    identificacion: { type: "String", unique: false },
    password: { type: "String", unique: false },
    rol: { type: "String", unique: false },

});

module.exports = mongoose.model("Users", usersSchema);
