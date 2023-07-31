import { Link, Outlet } from "react-router-dom";


const Modulos = () => {
    return (
        <div className="panelContainer">
            <div className="titleContainer">
                <h3>Mis Módulos</h3>
                <Link to="crear-modulo">
                    <button type="button" className="new button">+ Agregar Nuevo Módulo</button>
                </Link>
            </div>
                <Outlet/>
        </div>
    )
}

export default Modulos;