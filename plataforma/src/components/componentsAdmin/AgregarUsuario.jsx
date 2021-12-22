import React from "react";
import axios from "axios"


function AgregarUsuario() {

    const [formValue, setFormValue] = React.useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        password: "",
        rol: "",
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const creacionPredioFormData = {
            identificacion: formValue.identificacion,
            nombres: formValue.nombres,
            apellidos: formValue.apellidos,
            password: formValue.password,
            rol: "usuarioInterno",
        };



        axios.post("/api/usuariosInternos", creacionPredioFormData
        )
            .then(res => {

                console.log(res.data);
                window.alert(res.data.message);
                setFormValue({
                    identificacion: "",
                    nombres: "",
                    apellidos: "",
                    password: "",
                    
                });


            });
    };





    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    };



    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Agregar Usuario Interno</button>
            </div>

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Agregar un usuario interno</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div className="modal-body">
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div>
                                    <div className="row" style={casillaFormuStyle}>
                                        <p className="col">Cédula usuario</p>
                                        <input
                                            type="text"
                                            className="col"
                                            name="identificacion"
                                            value={formValue.identificacion}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="row" style={casillaFormuStyle}>
                                        <p className="col">Nombres: </p>
                                        <input
                                            type="text"
                                            className="col"
                                            name="nombres"
                                            value={formValue.nombres}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="row" style={casillaFormuStyle}>
                                        <p className="col">Apellidos: </p>
                                        <input
                                            type="text"
                                            className="col"
                                            name="apellidos"
                                            value={formValue.apellidos}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="row" style={casillaFormuStyle}>
                                        <p className="col">Contraseña: </p>
                                        <input
                                            type="password"
                                            className="col"
                                            name="password"
                                            value={formValue.password}
                                            onChange={handleChange} />

                                        <hr />    

                                        <button type="submit" className="btn btn-primary">Guardar usuario</button>
                                    </div>
                                </div>
                                </form>
                        </div>


                        <div className="modal-footer">

                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AgregarUsuario;