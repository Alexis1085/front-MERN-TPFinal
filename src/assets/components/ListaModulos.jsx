import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const ListaModulos = () => {

    const [ listaModulos, setListaModulos ] = useState([]);

    const URL = import.meta.env.VITE_URL_BACK;

    const [refresh, setRefresh]  = useState(0);

    useEffect(() => {
        axios.get(`${URL}/admin/modulos`)
        .then(response => {
            setListaModulos(response.data.listaModulos)
        })
    },[URL, refresh])

    const saveLocalData = (datos) => {
        let { _id, alias, calle, ciudad, diaSemana, /* diaSemanaString, */ horaInicio, duracionTurnos, cantidadTurnos, mensaje } = datos;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Alias', alias);
        localStorage.setItem('Calle', calle);
        localStorage.setItem('Ciudad', ciudad);
        localStorage.setItem('DiaSemana', diaSemana);
        //localStorage.setItem('DiaSemanaString', diaSemanaString);
        localStorage.setItem('HoraInicio', horaInicio);
        localStorage.setItem('DuracionTurnos', duracionTurnos);
        localStorage.setItem('CantidadTurnos', cantidadTurnos);
        localStorage.setItem('Mensaje', mensaje);
    }

    const onDelete = (id) => {
        axios.delete(`${URL}/admin/modulos/delete/${id}`)
        .then(response => { 
            if (response.data.moduloEliminado) {
                setRefresh(refresh+1);
            }
        })
    }

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Alias</th>
                        <th colSpan={2}>Dirección</th>
                        <th>Día de la Semana</th>
                        <th>Hora de Inicio</th>
                        <th>Duración de los Turnos</th>
                        <th>Cantidad de Turnos</th>
                        <th>Mensaje</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaModulos.map((element) => {
                        return (
                            <tr key={element._id}>
                                <td>{element.alias}</td>
                                <td>{element.calle}</td>
                                <td>{element.ciudad}</td>
                                <td>{element.diaSemanaString}</td>
                                <td>{element.horaInicio}</td>
                                <td>{element.duracionTurnos}</td>
                                <td>{element.cantidadTurnos}</td>
                                <td>{element.mensaje}</td>
                                <td>
                                    <Link to="/admin-panel/modulos/actualizar-modulo">
                                        <button className="update button" onClick={() => saveLocalData(element)}>Actualizar</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="delete button" onClick={() => onDelete(element._id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> 
    )
}

export default ListaModulos;
