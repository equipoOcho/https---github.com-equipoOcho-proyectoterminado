import React from "react";
import BuscarPredioFacturacion from "./BuscarPredioFacturacion";
import ConfigurarFacturacion from "./ConfigurarFacturacion";
import AdministrarFacturacionPorPredio from "./AdministrarFacturacionPorPredio"
import axios from "axios" 

const AdministracionFacturacion = () => {

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

    for (let i= 0; i < data.length; i++ ) {
        if (!data[i].saldoAPagar) {
            data[i].estado = "Sin facturas";
        }
        if (data[i].saldoAPagar === 0) {
            data[i].estado = "Al día";
        }
        if (data[i].saldoAPagar > 0) {
            data[i].estado = "Pendiente de pago";
        }
    }

    const listItems = data.map((predio) => 
        
        <a href="#" key={predio._id} className="list-group-item list-group-item-action" onClick={(e) => {handleItemClick(e, predio._id)}}>
            
            ID: { predio._id } <p> </p> 
            Dirección: { predio.direccion } <p> </p> 
            id Propietario: { predio.idProp } <p> </p> 
            estado: { predio.estado } <p> </p>

        </a>)




    return (
        <>
            <h3>Administración de facturación</h3>
            <hr />

            <div>
                <button type="button" className="btn btn-primary" onClick={actualizarLista}>Actualizar</button>
            </div>
            <hr />
            <div>
                <BuscarPredioFacturacion/>
            </div>
            <hr />
            <div className="list-group" style={listaStyle}>
                { listItems }
            </div>
            <hr />
            <div>
                <AdministrarFacturacionPorPredio idAConsultar={idAConsultar}/>
            </div>
            <hr />
            <div>
                <ConfigurarFacturacion/>
            </div>
            <hr />
        </>
    );
}

export default AdministracionFacturacion;