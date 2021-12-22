import React from "react";
import axios from "axios";

const EliminarPredio = ({idAConsultar}) => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }


    const [infoPredio, setInfoPredio] = React.useState({});

    let url = "/api/predios/"+idAConsultar

    function llenarCasillas () {
        
        
        axios.get(url).then((response) => {
            setInfoPredio(response.data)
            
        })
    }        

    function eliminarPredio (e) {
        axios.delete(url)
        .then(res => {
            window.alert(res.data.message);
            setInfoPredio("REGISTRO ELIMINADO")
        })    
    }

    return (
        <>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminar" onClick={llenarCasillas}>Eliminar predio seleccionado</button>

            <div className="modal fade" id="modalEliminar">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Eliminar un predio id: {idAConsultar}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="">
                            <div>
                                <h5>¿Está seguro de eliminar el predio?</h5>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Información predio:</p>
                                    <div>
                                        <p>Id usuario: {infoPredio.idProp} </p>
                                        <p>Nombre usuario: {infoPredio.nombres} {infoPredio.apellidos} </p>
                                        <p>Ubicación predio: {infoPredio.departamento} {infoPredio.ciudad} {infoPredio.direccion} {infoPredio.barrio} </p>
                                        <p>Estrato: {infoPredio.estrato} </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={eliminarPredio}>Eliminar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EliminarPredio;