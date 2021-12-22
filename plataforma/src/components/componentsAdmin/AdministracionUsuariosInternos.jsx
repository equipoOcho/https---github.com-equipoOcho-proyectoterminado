import React from "react";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import EliminarUsuario from "./EliminarUsuario";
import axios from "axios";



const AdministracionUsuariosInternos = () => {

    const listaStyle = {
        maxHeight: "500px",
        overflowY: "scroll",
    }

    let idSeleccionado = "";

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get("/api/usuariosInternos").then((response) => {
            setData(response.data)
            
        });
    }, []);

    const [idAConsultar, setIdAConsultar] = React.useState("");

    function handleItemClick(e, id) {
        idSeleccionado = id
        setIdAConsultar(idSeleccionado) 
        
    }

    function actualizarLista(e) {
        axios.get("/api/usuariosInternos").then((response) => {
            setData(response.data)
        });
    }

    const listItems = data.map((usuario) => 
        <a href="#" key={usuario._id} className="list-group-item list-group-item-action" onClick={(e) => {handleItemClick(e, usuario._id)}}>
            
            ID: { usuario._id } <p> </p> 
            cedula: { usuario.identificacion } <p> </p> 
            nombres: { usuario.nombres } <p> </p> 
            apellidos: { usuario.apellidos } <p> </p> 

        </a>)

    return (
        <>
            <div>
            <h3>Administración de usuarios internos</h3>
                <hr />
                <div>
                    <button type="button" className="btn btn-primary" onClick={actualizarLista}>Actualizar</button>
                </div>

                <hr />
                
                <div className="list-group" style={listaStyle}>
                    { listItems }
                </div>

                <hr />

                <div>
                    <EditarUsuario idAConsultar={idAConsultar} />
                </div>
                <hr />
                <div>
                    <EliminarUsuario idAConsultar={idAConsultar}/>
                </div>
                <hr />
                <div>
                    <AgregarUsuario/>
                </div>
                <hr />
            </div>
        </>
    );
}


export default AdministracionUsuariosInternos