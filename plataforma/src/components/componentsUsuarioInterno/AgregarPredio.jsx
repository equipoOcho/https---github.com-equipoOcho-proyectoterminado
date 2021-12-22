import React from "react";
import axios from "axios"


const AgregarPredio = () => {

    const [formValue, setFormValue] = React.useState({
        idProp: "",
        nombres: "",
        apellidos: "",
        departamento: "",
        ciudad: "",
        direccion: "",
        barrio: "",
        estrato: "",
    });

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
        


        axios.post("/api/predios", creacionPredioFormData 
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





    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }



    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Agregar Predio</button>
            </div>

            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Agregar un predio</h4>
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
                                <button type="submit" className="btn btn-primary">Guardar predio</button>
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

export default AgregarPredio;