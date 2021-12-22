import React from "react";
import axios from "axios";

const AdministrarFacturacionPorPredio = ({idAConsultar}) => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }

    const [saldoAPagara, setSaldoAPagara] = React.useState(0);
    const [estrato, setEstrato] = React.useState(0);
    const [dataConsultaEstrato, setDataConsultaEstrato] = React.useState(0);
    const [medicionACobrar, setMedicionACobrar] = React.useState(0);
    const [medicionActualizada, setMedicionActualizada] = React.useState(0)

    
    
    const [formValue, setFormValue] = React.useState({});

    function llenarCasillas () {
        let url = "/api/predios/"+idAConsultar

        axios.get(url).then((response) => {
            setFormValue(response.data)
            

            if (!response.data.medicionActual) {
                response.data.medicionActual = 0;
            }
            if (!response.data.saldoAPagar) {
                response.data.saldoAPagar = 0;
            } else {
                setSaldoAPagara(response.data.saldoAPagar)
            }

            setFormValue({
                idProp: response.data.idProp,
                nombres: response.data.nombres,
                apellidos: response.data.apellidos,
                departamento: response.data.departamento,
                ciudad: response.data.ciudad,
                direccion: response.data.direccion,
                barrio: response.data.barrio,
                estrato: response.data.estrato,
                medicionActual: response.data.medicionActual,
            })

            setEstrato(response.data.estrato)
            setMedicionActualizada(response.data.medicionActual)
            
            
        });
        
        
    }

    
    
    

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleChangeMedicion = (e) => {
        setMedicionActualizada(e.target.value)
        console.log(medicionActualizada)
    }

    const liquidar = () => {
        
        let url = "/api/estratos/"+estrato

        axios.get(url).then((response) => {
            setDataConsultaEstrato(response.data[0][estrato])
            setMedicionACobrar(medicionActualizada-formValue.medicionActual)
            setSaldoAPagara(saldoAPagara+((medicionActualizada-formValue.medicionActual)*(response.data[0][estrato])))
            console.log(response.data)
            
        })

        window.alert("Factura liquidada")

    } 
    


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const actualizaFacturacion = {
            medicionACobrar: medicionACobrar,
            medicionActual: medicionActualizada,
            saldoAPagar : saldoAPagara,
        }
     
        axios.put("/api/prediosFacturacion/"+idAConsultar, actualizaFacturacion 
        )
            .then(res => {
                console.log(res.data);
                window.alert(res.data.message);
                setFormValue({
                    medicionActual: medicionActualizada,
                })
            })
        setSaldoAPagara(0)
        setEstrato(0)
        setDataConsultaEstrato(0)
        setMedicionACobrar(0)
        setMedicionActualizada(0)
    }    
    
    const pagarFactura = () => {
        const actualizaFacturacion = {
            medicionACobrar: 0,
            saldoAPagar : 0,
        }
     
        axios.put("/api/prediosFacturacion/pago/"+idAConsultar, actualizaFacturacion 
        )
            .then(res => {
                console.log(res.data);
                window.alert(res.data.message);
            })
    }




    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAdministrarFacturaPredio" onClick={llenarCasillas}>Administrar facturación de predio seleccionado</button>

            <div className="modal fade" id="modalAdministrarFacturaPredio">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Administración de facturación por predio</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div>
                                <h5>Predio: {idAConsultar},<br />Id propietario: {formValue.idProp}, <br />Dirección: {formValue.direccion},<br />Barrio: {formValue.barrio}, <br />Ciudad: {formValue.ciudad}, <br />Departamento: {formValue.departamento}, <br />Estrato: {formValue.estrato})</h5>
                                <hr />
                                
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Ultima medición.</p>
                                    <input type="number" className="col" value={formValue.medicionActual} onChange={handleChange}/>
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Actualizar medición.</p>
                                    <input type="number" className="col" defaultValue={medicionActualizada} onChange={handleChangeMedicion}/>
                                </div>
                                <button type="button" className="btn btn-info" onClick={liquidar}>Liquidar</button>
                                <hr />
                                <button type="submit" className="btn btn-primary">Generar factura</button>
                                <hr />
                                <button type="button" className="btn btn-info" onClick={pagarFactura}>Registrar pago factura</button>
                                <hr />
                                
                            </div>
                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Buscar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AdministrarFacturacionPorPredio;