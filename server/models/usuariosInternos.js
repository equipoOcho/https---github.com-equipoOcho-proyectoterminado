const mongoose = require("mongoose");

const usuariosInternosSchema = mongoose.Schema({
    identificacion: String,
    nombres: String,
    apellidos: String,
    password: String,
    rol: String,
});

module.exports = mongoose.model("Usuarios Internos", usuariosInternosSchema);
