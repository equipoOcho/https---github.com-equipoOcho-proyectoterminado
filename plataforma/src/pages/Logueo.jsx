import React from "react";
import ReactDOM from "react-dom";
import UsuarioLogueado from "../components/UsuarioLogueado";
import logo from "../img/logo interaseo.png"
import Registro from "./Registro"
import axios from "axios"

const abreRegistro = () => {
    ReactDOM.render(<Registro />, document.getElementById("root"));
}
/*
function ingresoUsuario() {

    ReactDOM.render(<UsuarioLogueado />, document.getElementById("root"))


}
*/
const Logueo = () => {
    const loginStyle = {
        maxWidth : "360px",
        backgroundColor: "white",
        padding: "2%",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
        marginTop: "3vw",
        display: "grid",
        justifyItems: "center",
    }

    const formStyle = {
        display: "grid",
        width: "270px",
    }

    const casillasStyle = {
        display: "grid",
    }

    const inputStyle = {
        background: "#f2f2f2",
        border : "0",
        margin: "0 0 15px",
        padding: "15px",
        fontSize: "14px",
    }

    const buttonStyle = {
        background: "#004593",
        textTransform: "uppercase",
        border : "0",
        padding: "15px",
        color: "white",
        fontSize: "14px",
    }

    const textoInferiorStyle = {
        justifySelf: "center",
        fontSize: "12px",
        margin: "15px 0 0",
    }

    const linksStyle = {
        textDecoration: "none",
        color: "#004593",
        border : "none",
        backgroundColor: "white",
        fontWeight: "700",
    }



    const [formValue, setFormValue] = React.useState({
        usuario: "",
        password: "",

    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const infoSesion = {};

    const handleSubmit = (event) => {
        event.preventDefault();
        const registroFormData = {
            identificacion: formValue.usuario,
            password: formValue.password,
        }
    
        axios.post("/api/login", registroFormData 
        )
            .then(res => {
                if (res.data[0]) {
                    if (registroFormData.password !== res.data[0].password) {
                        window.alert("Contraseña incorrecta")
                    } else {
                        window.alert("IDENT EXITOSO")
                        ReactDOM.render(<UsuarioLogueado data={res.data[0]} />, document.getElementById("root"))
                    }
                } else {
                    window.alert("Usuario no encontrado");
                }
                                
            })
        
    }



    return (
    <>
        <div className="container-fluid" style={loginStyle}>
            <img src={logo} alt="Logo"/>
            <form className="login-form" style={formStyle} onSubmit={handleSubmit}>
                <div style={casillasStyle}>

                        <input 
                        type="text" 
                        placeholder="Usuario" 
                        name="usuario" 
                        style={inputStyle}
                        value={formValue.usuario}
                        onChange={handleChange}
                        />
                        <input 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password" 
                        style={inputStyle}
                        value={formValue.password}
                        onChange={handleChange}
                        />
                        <button type="submit" style={buttonStyle} >Ingresar</button>

                </div>
                <div style={casillasStyle}>
                    <p className="message" style={textoInferiorStyle}>¿No tiene un usuario? <button style={linksStyle} onClick={abreRegistro}>Registrese</button> </p>
                    <p className="message" style={textoInferiorStyle}>Preguntas frecuentes</p>
                    <p className="message" style={textoInferiorStyle}>Reporte de errores</p>

                </div>
            </form>
        </div>
    </>
    );
  };
  
  export default Logueo;