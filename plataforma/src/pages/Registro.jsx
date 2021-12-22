import React  from "react";
import ReactDOM from "react-dom";
import logo from "../img/logo interaseo.png"
import Logueo from "./Logueo";
import axios from "axios"


const Registro = () => {

    const [formValue, setFormValue] = React.useState({
        nombres: "",
        apellidos: "",
        identificacion: "",
        telefono: "",
        email: "",
        password: "",
        confirmacion: "",
        acepta: "",
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const registroFormData = {
            nombres: formValue.nombres,
            apellidos: formValue.apellidos,
            identificacion: formValue.identificacion,
            telefono: formValue.telefono,
            email: formValue.correo,
            password: formValue.contrasena,
            rol: "usuarioExterno",
        }
    
        axios.post("/api/registro", registroFormData 
        )
            .then(res => {
                
                console.log(res.data);
                window.alert(res.data.message);
                ReactDOM.render(<Logueo />, document.getElementById("root"));
                
            })
        
    }


    const loginStyle = {
        backgroundColor: "white",
        padding: "2%",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
        marginTop: "3vw",
        marginBottom: "3vw",
    }


    const inputStyle = {
        background: "#f2f2f2",
        border : "0",
        margin: "0 0 15px",
        padding: "15px",
        fontSize: "14px",
        width: "100%",
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

    const contenedorPorMitadStyle = {
        margin: "25px",
        maxWidth: "310px",
    }
    
    return (
    <>
        <div className="container" style={loginStyle}>
            <div className="d-flex justify-content-center">
                <img src={logo} alt="Logo" />
            </div>
            <form className="row d-flex justify-content-center" method="post" onSubmit={handleSubmit}>
                    <div className="col-sm" style={contenedorPorMitadStyle} >
                        <p>Nombres:</p>
                        <input 
                            type="text" 
                            name="nombres"
                            value={formValue.nombres}
                            onChange={handleChange}
                            placeholder="Nombres" 
                            style={inputStyle}
                        />
                        <p>Apellidos:</p>
                        <input 
                            type="text" 
                            name="apellidos"
                            value={formValue.apellidos}
                            onChange={handleChange}
                            placeholder="Apellidos" 
                            style={inputStyle}
                        />
                        <p>Número de identificación:</p>
                        <input 
                            type="text" 
                            name="identificacion"
                            value={formValue.identificacion}
                            onChange={handleChange}
                            placeholder="Identificación" 
                            style={inputStyle}
                        />
                        <p>Número de teléfono:</p>
                        <input 
                            type="text" 
                            name="telefono"
                            value={formValue.telefono}
                            onChange={handleChange}
                            placeholder="Teléfono" 
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md" style={contenedorPorMitadStyle}>
                        
                        <p>Correo electrónico:</p>
                        <input 
                            type="email" 
                            name="correo"
                            value={formValue.correo}
                            onChange={handleChange}
                            placeholder="Correo" 
                            style={inputStyle}
                        />
                        <p className="text-warning">El correo ingresado será utilizado como usuario para ingresar a la plataforma.</p>
                        <p>Ingrese una contraseña:</p>
                        <input 
                            type="password" 
                            name="contrasena"
                            value={formValue.contrasena}
                            onChange={handleChange}
                            placeholder="Contraseña" 
                            style={inputStyle}
                        />
                        <p>Confirme la contraseña:</p>
                        <input 
                            type="password" 
                            name="confirmacion"
                            value={formValue.confirmacion}
                            onChange={handleChange}
                            placeholder="Contraseña" 
                            style={inputStyle}
                        />
                        <div className="row">
                            <input 
                                type="checkbox" 
                                value={formValue.acepta}
                                onChange={handleChange}
                                className="col-sm-2" 
                                name="terminos"
                            /> 
                        <span className="text-left col-sm-10">Acepto terminos y condiciones.</span>
                        </div>
                        
                        
                    </div>
                    <hr />
                    <button type="submit" style={buttonStyle} >Registrar</button>

                <div>

                    <p class="message" style={textoInferiorStyle}>Preguntas frecuentes</p>
                    
                </div>
            </form>
        </div>
    </>
    );
  };
  
  export default Registro;