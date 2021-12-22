import React from "react";

const BuscarPredioFacturacion = () => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }

    /*
    IMPLEMENTAR AIP que almacene la información del formulario en la DB
    y retorne un número de ID y mensaje de operación satisfactorio

    */

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalBuscarFacturacion">Buscar Predio</button>

            <div className="modal fade" id="modalBuscarFacturacion">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Buscar un predio</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="">
                            <div>
                                <h5>Buscar por:</h5>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Identificación propietario</p>
                                    <input type="text" className="col" />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">ID predio</p>
                                    <input type="text" className="col" />
                                </div>
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

export default BuscarPredioFacturacion;