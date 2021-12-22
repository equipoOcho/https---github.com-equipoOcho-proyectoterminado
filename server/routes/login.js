const { Router } = require("express")
const router = Router();
const usersSchema = require("../models/users")

router.route("/")
    .post((req, res) => {
        console.log(req.body)
        identificacion = req.body.identificacion
        password = req.body.password
        var data = usersSchema
        .find( {"identificacion":identificacion} );
        usersSchema
        .find( {"identificacion":identificacion} )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

        

    })


module.exports = router;