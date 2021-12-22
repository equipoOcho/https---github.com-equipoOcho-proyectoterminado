import React from "react";
import ReactDOM from "react-dom";
import Logueo from "./pages/Logueo"
import "bootstrap/dist/js/bootstrap"


import "./static/style.sass"
import "./static/fonts.scss"



function App() {
    return (
        <>
            <Logueo />
        </>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById("root"));