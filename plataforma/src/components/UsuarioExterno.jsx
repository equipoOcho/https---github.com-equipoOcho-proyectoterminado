import React from "react";
import FacturasPorPagar from "./componentsUsuarioExterno/FacturasPorPagar";
import HistoricoFacturas from "./componentsUsuarioExterno/HistoricoFacturas";



const UsuarioExterno = () => {
    return (
        <>
            <div className="container mt-3">
                <hr />
                
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#home">Facturas por pagar</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Historico facturas</a>
                    </li>

                </ul>

                
                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br/>
                        <FacturasPorPagar/>
                    </div>
                    <div id="menu1" className="container tab-pane fade"><br/>
                        <HistoricoFacturas/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsuarioExterno