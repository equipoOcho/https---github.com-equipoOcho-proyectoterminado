import React from "react";
import AgregarPredio from "./AgregarPredio";
import BuscarPredio from "./BuscarPredio";
import EditarPredio from "./EditarPredio";
import EliminarPredio from "./EliminarPredio";
import axios from "axios";



const AdministracionPredios = () => {

    const listaStyle = {
        maxHeight: "500px",
        overflowY: "scroll",
    }

    let idSeleccionado = "";

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios.get("/api/predios").then((response) => {
            setData(response.data)
            
        });
    }, []);

    const [idAConsultar, setIdAConsultar] = React.useState("");

    function handleItemClick(e, id) {
        idSeleccionado = id
        setIdAConsultar(idSeleccionado) 
        
    }

    function actualizarLista(e) {
        axios.get("/api/predios").then((response) => {
            setData(response.data)
        });
    }

    const listItems = data.map((predio) => 
        <a href="#" key={predio._id} className="list-group-item list-group-item-action" onClick={(e) => {handleItemClick(e, predio._id)}}>
            
            ID: { predio._id } <p> </p> 
            Dirección: { predio.direccion } <p> </p> 
            id Propietario: { predio.idProp } <p> </p> 

        </a>)

    return (
        <>
            <div>
            <h3>Administración de predios</h3>
                <hr />
                <div>
                    <button type="button" className="btn btn-primary" onClick={actualizarLista}>Actualizar</button>
                </div>

                <hr />
                <div>
                    <BuscarPredio/>
                </div>
                <hr />

                <div className="list-group" style={listaStyle}>
                    { listItems }
                </div>

                <hr />

                <div>
                    <EditarPredio idAConsultar={idAConsultar} />
                </div>
                <hr />
                <div>
                    <EliminarPredio idAConsultar={idAConsultar}/>
                </div>
                <hr />
                <div>
                    <AgregarPredio/>
                </div>
                <hr />
            </div>
        </>
    );
}

export default AdministracionPredios;