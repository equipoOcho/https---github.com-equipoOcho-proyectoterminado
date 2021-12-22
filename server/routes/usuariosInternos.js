const { Router } = require("express")
const router = Router();
const usuariosInternosSchema = require("../models/usuariosInternos");
const usersSchema = require("../models/users")

router.route("/")
    .get((req, res) => {
        usuariosInternosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        
    })
    .post((req, res) => {
        const registro = usuariosInternosSchema(req.body);
        usersSchema(req.body).save()
        registro
            .save()
            .then((data)=>res.json({message:"Registro exitoso"}))
            .catch((error)=>res.json({message:error}))
    })

router.route("/:id")
    .get((req, res) => {
        usuariosInternosSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
    })    
    
    .put( async (req, res) =>{
                
        const {cedula, nombres, apellidos, password} = req.body;
        await usuariosInternosSchema
        .findByIdAndUpdate(req.params.id, {$set: {
            cedula,nombres,apellidos,password}
        })
        .then((data) =>res.json({message:"Registro actualizado"}))
        .catch((error)=>res.json({message:error}))

    })    

    .delete ( async(req, res )=>{
        await usuariosInternosSchema
        .findByIdAndDelete(req.params.id)
        res.json({message:"Registro eliminado"})
    })

module.exports = router;