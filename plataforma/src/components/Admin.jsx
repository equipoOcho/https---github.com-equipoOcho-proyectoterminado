import React from "react";
import AdministracionPredios from "./componentsUsuarioInterno/AdministracionPredios";
import AdministracionFacturacion from "./componentsUsuarioInterno/AdministracionFacturacion";
import AdministracionUsuariosInternos from  "./componentsAdmin/AdministracionUsuariosInternos";


const Admin = () => {
    return (
        <>
            <div className="container mt-3">
                <hr />
                
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#home">Administración Usuarios Internos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Administración Predios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu2">Administración Facturación</a>
                    </li>

                </ul>

                
                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br/>
                        <AdministracionUsuariosInternos/>
                    </div>
                    <div id="menu1" className="container tab-pane fade"><br/>
                        <AdministracionPredios/>
                    </div>
                    <div id="menu2" className="container tab-pane fade"><br/>
                        <AdministracionFacturacion/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin