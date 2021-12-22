const { Router } = require("express")
const router = Router();
const EstratosSchema = require("../models/estratos");


router.route("/:id")
    .get((req, res) => {
        EstratosSchema
        .find({},{[req.params.id]:1})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        
    })

router.route("/")
    .get((req, res) => {
        EstratosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        
    })    
    .post((req, res) => {
        const registro = EstratosSchema(req.body);
        registro
            .save()
            .then((data)=>res.json({message:"Registro exitoso"}))
            .catch((error)=>res.json({message:error}))
    })
    .delete ( async(req, res )=>{
        await EstratosSchema
        .remove()
        res.json({message:"Registro eliminado"})
    })

module.exports = router;    