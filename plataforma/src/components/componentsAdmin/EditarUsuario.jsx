import React from "react";
import axios from "axios";

const EditarUsuario = ({idAConsultar}) => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }

    


    const [formValue, setFormValue] = React.useState({});

    function llenarCasillas () {
        let url = "/api/usuariosInternos/"+idAConsultar
        
        axios.get(url).then((response) => {
            setFormValue(response.data)
            setFormValue({
                identificacion: response.data.identificacion,
                nombres: response.data.nombres,
                apellidos: response.data.apellidos,
                password: response.data.password,
            })
        });
    }


    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const creacionPredioFormData = {
            identificacion: formValue.identificacion,
            nombres: formValue.nombres,
            apellidos: formValue.apellidos,
            password: formValue.password,

        }
     
        axios.put("/api/usuariosInternos/"+idAConsultar, creacionPredioFormData 
        )
            .then(res => {
                
                console.log(res.data);
                window.alert(res.data.message);
                setFormValue({
                    identificacion: "",
                    nombres: "",
                    apellidos: "",
                    password: "",

                })
            })
    }       


    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditarPredio" onClick={llenarCasillas}>Editar usuario seleccionado</button>
            </div>

            <div className="modal fade" id="modalEditarPredio">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Editar un usuario id: {idAConsultar} </h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Identificación usuario</p>
                                    <input 
                                        type="text" 
                                        className="col"
                                        name = "identificacion" 
                                        value = {formValue.identificacion}
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Nombres usuario</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "nombres"
                                        value = {formValue.nombres}
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Apellidos usuario</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "apellidos"
                                        value = {formValue.apellidos}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Contraseña: </p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "password"
                                        value = {formValue.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Actualizar usuario</button>
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

export default EditarUsuario;