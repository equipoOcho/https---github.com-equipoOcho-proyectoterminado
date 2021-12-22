import React from "react";
import axios from "axios";

const EditarPredio = ({idAConsultar}) => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }

    


    const [formValue, setFormValue] = React.useState({});

    function llenarCasillas () {
        let url = "/api/predios/"+idAConsultar
        
        axios.get(url).then((response) => {
            setFormValue(response.data)
            setFormValue({
                idProp: response.data.idProp,
                nombres: response.data.nombres,
                apellidos: response.data.apellidos,
                departamento: response.data.departamento,
                ciudad: response.data.ciudad,
                direccion: response.data.direccion,
                barrio: response.data.barrio,
                estrato: response.data.estrato,
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
            idProp: formValue.idProp,
            nombres: formValue.nombres,
            apellidos: formValue.apellidos,
            departamento: formValue.departamento,
            ciudad: formValue.ciudad,
            direccion: formValue.direccion,
            barrio: formValue.barrio,
            estrato: formValue.estrato 
        }
     
        axios.put("/api/predios/"+idAConsultar, creacionPredioFormData 
        )
            .then(res => {
                
                console.log(res.data);
                window.alert(res.data.message);
                setFormValue({
                    idProp: "",
                    nombres: "",
                    apellidos: "",
                    departamento: "",
                    ciudad: "",
                    direccion: "",
                    barrio: "",
                    estrato: "",
                })
            })
    }       



    /*
    IMPLEMENTAR AIP que almacene la información del formulario en la DB
    y retorne un número de ID y mensaje de operación satisfactorio

    */

    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditarPredio" onClick={llenarCasillas}>Editar predio seleccionado</button>
            </div>

            <div className="modal fade" id="modalEditarPredio">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Editar un predio id: {idAConsultar} </h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Identificación propietario</p>
                                    <input 
                                        type="text" 
                                        className="col"
                                        name = "idProp" 
                                        value = {formValue.idProp}
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Nombres propietario</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "nombres"
                                        value = {formValue.nombres}
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Apellidos propietario</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "apellidos"
                                        value = {formValue.apellidos}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Departamento</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "departamento"
                                        value = {formValue.departamento}
                                        onChange={handleChange}
                                    />
                                </div><div className="row" style={casillaFormuStyle}>
                                    <p className="col">Ciudad</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "ciudad"
                                        value = {formValue.ciudad}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Dirección del predio</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "direccion"
                                        value = {formValue.direccion}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Barrio</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "barrio"
                                        value = {formValue.barrio}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato socioeconómico</p>
                                    <input 
                                        type="text" 
                                        className="col" 
                                        name = "estrato"
                                        value = {formValue.estrato}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Actualizar predio</button>
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

export default EditarPredio;