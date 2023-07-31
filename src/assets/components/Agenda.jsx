import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Agenda = () => {

    const [ listaTurnos, setListaTurnos ] = useState([]);

    const URL = import.meta.env.VITE_URL_BACK;

    //const [refresh, setRefresh]  = useState(0);

    useEffect(() => {
        axios.get(`${URL}/admin/agenda`)
        .then(response => {
            setListaTurnos(response.data.listaTurnos)
            //console.log(listaTurnos)
        })
    },[URL/* , refresh */])

    return (
        <div className="panelContainer">
            <div className="titleContainer">
                <h3>Mi Agenda</h3>
                <Link to="abrir-agenda">
                    <button type="button" className="new button">+ Abrir Agenda</button>
                </Link>
            </div>
                <Outlet/>
                {listaTurnos.map((element) => {
                    return(
                        <h5 key={element._id}>Agenda</h5>
                    )
                }) 
                }
        </div>
    )
}

export default Agenda;
