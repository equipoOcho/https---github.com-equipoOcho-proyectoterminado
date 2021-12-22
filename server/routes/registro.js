const { Router } = require("express")
const router = Router();
const RegistrosSchema = require("../models/registro");
const usersSchema = require("../models/users")

router.route("/")
    .post((req, res) => {
        const registro = RegistrosSchema(req.body);
        usersSchema(req.body).save()
        
        registro
            .save()
            .then((data)=>res.json({message:"Registro exitoso"}))
            .catch((error)=>res.json({message:error}))
    })


module.exports = router;