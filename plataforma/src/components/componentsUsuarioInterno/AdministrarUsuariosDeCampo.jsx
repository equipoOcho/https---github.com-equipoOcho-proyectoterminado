import React from "react";


const AdministrarUsuariosDeCampo = () => {

    const casillaFormuStyle = {
        margin: "10px 10px 10px 10px",
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalUsuariosCampo">Añadir usuario de campo</button>
                <hr />
                Lista de predios

            <div className="modal fade" id="modalUsuariosCampo">
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
                                    <p className="col">ID usuario de campo</p>
                                    <input type="text" className="col" />
                                </div>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Nombre usuario de campo</p>
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
            <hr />
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminarUsuarioCampo">Eliminar usuario de campo</button>

            <div className="modal fade" id="modalEliminarUsuarioCampo">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">


                    <div className="modal-header">
                        <h4 className="modal-title">Eliminar un usuario de campo</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>


                    <div className="modal-body">
                        <form action="">
                            <div>
                                <h5>¿Está seguro de eliminar el predio?</h5>
                                <div className="row" style={casillaFormuStyle}>
                                    <p className="col">Información usuario de campo:</p>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Eliminar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        
                    </div>

                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default AdministrarUsuariosDeCampo;