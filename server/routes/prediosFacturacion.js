const { Router } = require("express")
const router = Router();
const PrediosSchema = require("../models/predios");


router.route("/:id")
    .put( async (req, res) =>{
        
        const {medicionActual, medicionACobrar, saldoAPagar} = req.body;

       
        await PrediosSchema
        .findByIdAndUpdate(req.params.id, {$set: {
            medicionActual, medicionACobrar, saldoAPagar}
        })
        .then((data) =>res.json({message:"Registro actualizado"}))
        .catch((error)=>res.json({message:error}))
        

    })    

router.route("/pago/:id")
    .put( async (req, res) =>{
        
        const {medicionACobrar, saldoAPagar} = req.body;

       
        await PrediosSchema
        .findByIdAndUpdate(req.params.id, {$set: {
            medicionACobrar, saldoAPagar}
        })
        .then((data) =>res.json({message:"Registro actualizado"}))
        .catch((error)=>res.json({message:error}))

    })   


router.route("/predioPorUsuario/:id")
    .get((req, res) => {
        PrediosSchema
        .find( {"idProp":req.params.id} )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
        
})   


module.exports = router; 