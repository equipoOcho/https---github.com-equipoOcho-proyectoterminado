const mongoose = require("mongoose");

const prediosSchema = mongoose.Schema({
    idProp: String,
    nombres: String,
    apellidos: String,
    departamento: String,
    ciudad: String,
    direccion: String,
    barrio: String,
    estrato: String,
    medicionActual: Number,
    saldoAPagar: Number,
    medicionACobrar: Number
});

module.exports = mongoose.model("Predios", prediosSchema);
