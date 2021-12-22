const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const registrosSchema = mongoose.Schema({
    nombres: { type: "String", required: true },
    apellidos: { type: "String", required: true },
    identificacion: { type: Number, required: true },
    telefono: { type: Number, required: true },
    email: { type: "String", required: true },
    password: { type: "String", required: true },
    rol: { type: "String", required: true },
});

registrosSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  registrosSchema.pre("save", async function (next) {
    if (!this.isModified) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

module.exports = mongoose.model("Registros", registrosSchema);
