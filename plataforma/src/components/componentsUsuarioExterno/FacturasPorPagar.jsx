import React from "react";
import axios from "axios";


const FacturasPorPagar = () => {

    const listaStyle = {
        maxHeight: "500px",
        overflowY: "scroll",
    }

    const [data, setData] = React.useState([]);

    const idProp = 1016024133

    React.useEffect(() => {
        let url = "/api/prediosFacturacion/predioPorUsuario/"+idProp;
        
        axios.get(url).then((response) => {
            setData(response.data)
        });
    }, []);

    const listItems = data.map((predio) => 
        
        <p key={predio._id} className="list-group-item list-group-item-action">
            
            ID: { predio._id } <p> </p> 
            Dirección: { predio.direccion } <p> </p> 
            id Propietario: { predio.idProp } <p> </p> 
            Su saldo a pagar es: { predio.saldoAPagar } <p> </p>
            Su último consumo es: { predio.medicionACobrar } Kilowatts<p> </p>

        </p>)


    return (
        <>
            <h3>Facturas por pagar</h3>
            <hr />
            <div className="list-group" style={listaStyle}>
                { listItems }
            </div>
            <hr />
        </>
    );
}

export default FacturasPorPagar;