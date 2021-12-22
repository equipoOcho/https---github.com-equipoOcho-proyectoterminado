import React from "react";
import axios from "axios";

const ConfigurarFacturacion = () => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }

    const [formValue, setFormValue] = React.useState({});

    function llenarCasillas () {
        let url = "/api/estratos/"
        
        axios.get(url).then((response) => {
            setFormValue(response.data)
            console.log(response.data)
            setFormValue({
                estratoUno: response.data[0]["1"],
                estratoDos: response.data[0]["2"],
                estratoTres: response.data[0]["3"],
                estratoCuatro: response.data[0]["4"],
                estratoCinco: response.data[0]["5"],
                estratoSeis: response.data[0]["6"]
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
            1: formValue.estratoUno,
            2: formValue.estratoDos,
            3: formValue.estratoTres,
            4: formValue.estratoCuatro,
            5: formValue.estratoCinco,
            6: formValue.estratoSeis,

        }

        axios.delete("/api/estratos/")
        .then(res => {

        })
     
        axios.post("/api/estratos/", creacionPredioFormData 
        )
            .then(res => {
                
                console.log(res.data);
                window.alert(res.data.message);
                
            })
    }       






    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalConfigurarFacturacion" onClick={llenarCasillas}>Configurar Facturacion</button>
            </div>

            <div className="modal fade" id="modalConfigurarFacturacion">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Configuración de facturación</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <h5>Unidades de medida:</h5>
                                <hr />
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato uno: </p>
                                    <input type="text" className="col"
                                    name = "estratoUno" 
                                    value = {formValue.estratoUno}
                                    onChange={handleChange}  />
                                    <p className="col">COP por KW</p>

                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato dos:</p>
                                    <input type="text" className="col" 
                                    name = "estratoDos" 
                                    value = {formValue.estratoDos}
                                    onChange={handleChange} />
                                    <p className="col">COP por KW</p>

                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato tres:</p>
                                    <input type="text" className="col"
                                    name = "estratoTres" 
                                    value = {formValue.estratoTres}
                                    onChange={handleChange}  />
                                    <p className="col">COP por KW</p>

                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato cuatro:</p>
                                    <input type="text" className="col" 
                                    name = "estratoCuatro" 
                                    value = {formValue.estratoCuatro}
                                    onChange={handleChange} />
                                    <p className="col">COP por KW</p>

                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato cinco:</p>
                                    <input type="text" className="col"
                                    name = "estratoCinco" 
                                    value = {formValue.estratoCinco}
                                    onChange={handleChange}  />
                                    <p className="col">COP por KW</p>

                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Estrato seis:</p>
                                    <input type="text" className="col"
                                    name = "estratoSeis" 
                                    value = {formValue.estratoSeis}
                                    onChange={handleChange}  />
                                    <p className="col">COP por KW</p>

                                </div>
                                <hr />
                                <button type="submit" className="btn btn-primary">Actualizar valores</button>
                                
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

export default ConfigurarFacturacion;