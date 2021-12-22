const express = require("express");
const path = require("path");
const conn = require("../server/conn")
const bodyParser = require("body-parser");
const app = express();
const rootRouter = express.Router();

//settings
const PORT = process.env.PORT || 3001;

const buildPath = path.normalize(path.join(__dirname, '../plataforma/build'));

//middlewares
app.use(express.static(buildPath));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

///RUTAS


// api para registro
app.use("/api/registro", require("./routes/registro"))
app.use("/api/login", require("./routes/login"))
app.use("/api/usuariosInternos", require("./routes/usuariosInternos"))


// api para registrar predio
app.use("/api/predios", require("./routes/predios"))
app.use("/api/estratos", require("./routes/estratos"))
app.use("/api/prediosFacturacion", require("./routes/prediosFacturacion"))

///FIN RUTAS

rootRouter.get('(/*)?', async (req, res, next) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});
app.use(rootRouter);

 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });