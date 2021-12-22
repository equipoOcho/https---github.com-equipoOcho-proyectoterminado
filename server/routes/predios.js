const { Router } = require("express")
const router = Router();
const PrediosSchema = require("../models/predios");

router.route("/")
    .get((req, res) => {
        PrediosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        
    })
    .post((req, res) => {

        const predio = PrediosSchema(req.body);
        console.log(req.body);
        predio
            .save()
            .then((data)=>res.json({message:"Registro exitoso"}))
            .catch((error)=>res.json({message:error}))
    })

router.route("/:id")
    .get((req, res) => {
        PrediosSchema
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
    })    
    
    .put( async (req, res) =>{
                
        const {idProp, nombres, apellidos, departamento, ciudad, direccion, barrio, estrato} = req.body;
        await PrediosSchema
        .findByIdAndUpdate(req.params.id, {$set: {
            idProp,nombres,apellidos,departamento, ciudad, direccion, barrio, estrato}
        })
        .then((data) =>res.json({message:"Registro actualizado"}))
        .catch((error)=>res.json({message:error}))

    })    

    .delete ( async(req, res )=>{
        await PrediosSchema
        .findByIdAndDelete(req.params.id)
        res.json({message:"Registro eliminado"})
    })

module.exports = router;