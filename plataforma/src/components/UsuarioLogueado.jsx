import React from "react";
import logo from "../img/logo interaseo.png"
import UsuarioInterno from "./UsuarioInterno";
import UsuarioExterno from "./UsuarioExterno";
import Admin from "./Admin";



const UsuarioLogueado = ({data}) => {

    console.log(data.rol)
    let rol = data.rol

    let destino = "";

    if (rol == "admin" ) {
        destino = <Admin/>;
    } else if (rol == "usuarioInterno" ) {
        destino = <UsuarioInterno/>;
    } else {
        destino = <UsuarioExterno/>;
    }
    

    const styleImage = {
        width: "100px",
        margin: "15px 0px 15px 0",
    }
    const infoUsuarioStyle = {
        margin: "25px 0px 25px 0",
    }
    
    function cerrarSesion() {

        window.location.reload();
    }

    return (
        <>
            <div className="container ">
                <div className="container-xl bg-primary d-flex justify-content-center">
                    <div className="col-sm-9 flex-grow-1">
                        <img src={logo} alt="Logo" style={styleImage} />
                    </div>
                    <div className="col-sm-3">
                        <p className="text-info" style={infoUsuarioStyle}>Usuario: {data.identificacion} <br /> Rol: {data.rol} </p>
                        <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesión</button>
                    </div>
                </div>
                <div className="container-xl bg-light">
                    {destino}
                </div>
            </div>

        </>
    );
}

export default UsuarioLogueado