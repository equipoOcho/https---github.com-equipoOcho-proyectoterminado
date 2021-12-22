import React from "react";
import AdministracionPredios from "./componentsUsuarioInterno/AdministracionPredios";
import AdministracionFacturacion from "./componentsUsuarioInterno/AdministracionFacturacion"


const UsuarioInterno = () => {
    return (
        <>
            <div className="container mt-3">
                <hr />
                
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#home">Predios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Facturación</a>
                    </li>

                </ul>

                
                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br/>
                        <AdministracionPredios/>
                    </div>
                    <div id="menu1" className="container tab-pane fade"><br/>
                        <AdministracionFacturacion/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsuarioInterno